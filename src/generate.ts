import { applyRule, findMatches, validateGrid } from './transform'
import { Model, OnDone as ModelCallback, Rule, Sequence, Steps, ValidModel } from './types'

export function generate(opts: Model) {
  validateGrid(opts)
  const model: ValidModel = { ...opts, ...processRules(opts.rules), count: 0, rule: -1 }

  for (const sequence of model.sequences) {
    while (true) {
      let matched = false

      for (const rule of sequence.rules) {
        console.log(rule.from, rule.to)
        matched = applySequenceRule(model, sequence, rule, matched)
      }

      if (!matched) break
    }
  }

  return model
}

let STOPPED = false
export function slowGenerate(opts: Model, callback: ModelCallback, onDone?: ModelCallback) {
  let INC = 1000 / 60
  let NEXT = 0

  validateGrid(opts)
  const model: ValidModel = { ...opts, ...processRules(opts.rules), count: 0, rule: -1 }

  console.log(model)

  STOPPED = false
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
      while (!STOPPED) {
        let matched = false

        for (const rule of sequence.rules) {
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
    STOPPED = true
    model.rule = -1
  }

  runner()

  return { stop }
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

function delay(ms: number = 80) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function processRules(inputs: string[]) {
  const sequences: ValidModel['sequences'] = []
  const unions: ValidModel['unions'] = {}
  for (const rules of inputs) {
    if (rules.startsWith('UNION') || rules.startsWith('SYMBOL')) {
      const [symbol, out] = rules
        .split(' ')[1]
        .split('=')
        .map((val) => val.trim())

      if (symbol.length > 1) throw new Error(`Invalid union symbol: Must be only one character. ({SYMBOL}={UNION})`)
      unions[symbol] = new Set(out.split(''))

      continue
    }

    sequences.push(getSequences(rules))
  }

  return { sequences, unions: unions }
}

function getSequences(rules: string): Sequence {
  const seq: Sequence = { type: 'standard', rules: [] }

  if (rules.toLowerCase().startsWith('one')) {
    seq.type = 'one'
    rules = rules.slice(3).trim()
  }

  console.log(rules)

  for (const input of expandRules(rules)) {
    const [instruction, steps] = input.split(' ')
    const pair = instruction.split('=')

    const rule: Rule = {
      type: 'one',
      from: pair[0],
      to: pair[1],
      steps: getSteps(steps),
    }

    if (rule.steps.all) rule.type = 'all'

    if (pair[0].length !== pair[1].length)
      throw new Error(`{FROM} and {TO} patterns must be equal in length: ${instruction}`)
    for (let c = 0; c < pair[0].length; c++) {
      if ((pair[0][c] === '/' && pair[1][c] !== '/') || (pair[0][c] !== '/' && pair[1][c] === '/')) {
        throw new Error(`Step characters (/) must occur in the same positions: ${instruction}`)
      }
    }

    seq.rules.push(rule)
  }

  return seq
}

function expandRules(rules: string) {
  return rules.split(',').map((rule) => rule.trim())
}

function getSteps(input?: string): Steps {
  const steps: Steps = { count: 0 }
  if (!input) return steps

  if (input.startsWith('#') === false) {
    throw new Error(`Steps must start with '#', (${input})`)
  }

  if (input === '#ALL') {
    steps.all = true
    return steps
  }

  if (input.includes('..')) {
    const range = input.split('..')
    const [from, to] = [Number(range[0]), Number(range[1])]

    if (isNaN(from) || isNaN(to)) {
      throw new Error(`Step range must be formatted: #{FROM}..{TO}`)
    }

    if (from > to || from < 0 || to < 0) {
      throw new Error(`Invalid step range: {FROM} must be below {TO} and both values must be above 0`)
    }

    steps.max = getRandom(from, to)
    steps.seed = () => getRandom(from, to)
    return steps
  }

  const value = Number(input.slice(1))
  if (isNaN(value)) {
    throw new Error(`Invalid step: Must follow be one of: #ALL, #{int}, #{from}..{to}`)
  }

  steps.max = value
  return steps
}

function getRandom(from: number, to: number) {
  return Math.floor(Math.random() * (to - from + 1) + from)
}
