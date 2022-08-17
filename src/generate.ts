import { applyRule, findMatches, validateGrid } from './transform'
import { Model, OnDone as ModelCallback, Rule, Sequence, Steps, ValidModel } from './types'

let ID = 0

export function generate(opts: Model) {
  validateGrid(opts)
  const model: ValidModel = { ...opts, ...processSequences(opts.rules), count: 0, rule: -1, id: 0 }

  for (const sequence of model.sequences) {
    while (true) {
      let matched = false

      for (const rule of sequence.rules) {
        matched = applySequenceRule(model, sequence, rule, matched)
      }

      if (!matched) break
    }
  }

  return model
}

export function slowGenerate(opts: Model, callback: ModelCallback, onDone?: ModelCallback) {
  let INC = 1000 / 60
  let NEXT = 0

  validateGrid(opts)
  const model: ValidModel = { ...opts, ...processSequences(opts.rules), count: 0, rule: -1, id: ++ID }

  NEXT = Date.now() + INC

  const render = async () => {
    if (Date.now() >= NEXT) {
      callback(model)
      await delay(0)
      NEXT += INC
    }
  }

  const runner = async () => {
    for (const sequence of model.sequences) {
      model.rule++
      while (ID === model.id) {
        let matched = false

        for (const rule of sequence.rules) {
          if (ID !== model.id) return
          matched = applySequenceRule(model, sequence, rule, matched)
          await render()

          if (sequence.type === 'standard' && matched) break
        }

        if (!matched) break
      }
    }

    callback(model)
    onDone?.(model)
    stop()
  }

  const stop = () => {
    model.rule = -1
    model.id = -1
  }

  runner()

  return { stop }
}

function delay(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function applySequenceRule(model: ValidModel, seq: Sequence, rule: Rule, matched: boolean) {
  if (rule.steps.max && !rule.steps.all && rule.steps.count >= rule.steps.max) {
    return matched || false
  }

  model.count++

  let matches = findMatches(model, rule)
  if (matches.length === 0) return matched || false

  if (rule.steps.all) {
    for (const match of matches) {
      applyRule(model, rule, match)
    }

    model.count += matches.length
    rule.steps.count = Infinity
  } else {
    const random = Math.floor(Math.random() * matches.length)
    const match = matches[random]
    rule.steps.count++
    applyRule(model, rule, match)

    if (seq.type === 'one') {
      return true
    }
  }

  return true
}

export function processSequences(inputs: string[], errors = true) {
  const sequences: ValidModel['sequences'] = []
  const unions: ValidModel['unions'] = {}

  for (const rules of inputs) {
    if (rules.toLowerCase().startsWith('union') || rules.toLowerCase().startsWith('symbol')) {
      const [, ...input] = rules.split(' ')
      if (!input.length) continue

      const [symbol, union] = input
        .join('')
        .split('=')
        .map((v) => v.replace(/\s/g, ''))
      if (!symbol || !union) continue

      if (symbol.length > 1 && errors)
        throw new Error(`Invalid union symbol: Must be only one character. ({SYMBOL}={UNION})`)
      unions[symbol] = new Set(union.split(''))

      continue
    }

    sequences.push(getSequences(rules, errors))
  }

  return { sequences, unions }
}

function getSequences(rules: string, errors = true): Sequence {
  const seq: Sequence = { type: 'standard', rules: [] }

  if (rules.toLowerCase().startsWith('one')) {
    seq.type = 'one'
    rules = rules.slice(3).trim()
  }

  for (const input of expandRules(rules)) {
    const [instruction, steps] = input
      .replace(/\s+/g, ' ')
      .replace(/(\s*)=(\s*)/, '=')
      .split(' ')
    const pair = instruction.replace(/\s/g, '').split('=')

    if (pair[0] === pair[1]) continue

    if (pair.length !== 2) {
      if (errors) throw new Error(`Rules must follow format: {FROM}={TO}`)
      pair.push('')
    }

    const rule: Rule = {
      type: 'one',
      from: pair[0],
      to: pair[1],
      steps: getSteps(steps, errors),
    }

    if (rule.steps.all) rule.type = 'all'

    if (pair[0].length !== pair[1].length && errors) {
      throw new Error(`{FROM} and {TO} patterns must be equal in length: ${instruction}`)
    }

    for (let c = 0; c < pair[0].length; c++) {
      if ((pair[0][c] === '/' && pair[1][c] !== '/') || (pair[0][c] !== '/' && pair[1][c] === '/')) {
        if (errors) throw new Error(`Step characters (/) must occur in the same positions: ${instruction}`)
      }
    }

    seq.rules.push(rule)
  }

  return seq
}

function expandRules(rules: string) {
  return rules.split(',').map((rule) => rule.trim())
}

function getSteps(input: string, errors = true): Steps {
  const steps: Steps = { count: 0 }
  if (!input) return steps

  if (input.startsWith('#') === false) {
    if (errors) throw new Error(`Steps must start with '#', (${input})`)
    return steps
  }

  if (input === '#ALL') {
    steps.all = true
    return steps
  }

  if (input.includes('..')) {
    const range = input.split('..')
    const [from, to] = [Number(range[0]), Number(range[1])]

    if (isNaN(from) || isNaN(to)) {
      if (errors) throw new Error(`Step range must be formatted: #{FROM}..{TO}`)
      return steps
    }

    if (from > to || from < 0 || to < 0) {
      if (errors) throw new Error(`Invalid step range: {FROM} must be below {TO} and both values must be above 0`)
      return steps
    }

    steps.max = getRandom(from, to)
    steps.seed = () => getRandom(from, to)
    return steps
  }

  const value = Number(input.slice(1))
  if (isNaN(value)) {
    if (errors) throw new Error(`Invalid step: Must follow be one of: #ALL, #{int}, #{from}..{to}`)
    return steps
  }

  steps.max = value
  return steps
}

function getRandom(from: number, to: number) {
  return Math.floor(Math.random() * (to - from + 1) + from)
}
