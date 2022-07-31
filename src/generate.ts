import { applyRule, findMatches, validateGrid } from './transform'
import { Model, OnDone as ModelCallback, Rule, Sequence, Steps, ValidModel } from './types'

export function generate(opts: Model) {
  validateGrid(opts)
  const model: ValidModel = { ...opts, ...processRules(opts.rules), count: 0 }

  for (const sequence of model.sequences) {
    while (true) {
      let matched = false

      for (const seq of sequence) {
        matched = applySequence(model, seq)
      }

      if (!matched) break
    }
  }

  return model
}

/**
 * Generate a model with a delay between each step
 * @param model
 * @param delay Delay between each step to allow rendering
 * @returns
 */

export function slowGenerate(opts: Model, callback: ModelCallback, onDone?: ModelCallback) {
  let INC = 1000 / 60
  let NEXT = 0

  validateGrid(opts)
  const model: ValidModel = { ...opts, ...processRules(opts.rules), count: 0 }

  let stopped = false
  NEXT = Date.now() + INC

  const render = async (cb: ModelCallback, model: Model) => {
    if (Date.now() >= NEXT) {
      cb(model)
      await delay(0)
      NEXT += INC
    }
  }

  const runner = async () => {
    for (const sequence of model.sequences) {
      while (!stopped && true) {
        let matched = false

        for (const seq of sequence) {
          matched = applySequence(model, seq)
          await render(callback, model)
        }

        if (!matched) break
      }
    }

    callback(model)
    onDone?.(model)
    stopped = true
  }

  const stop = () => {
    stopped = true
  }

  runner()

  return { stop }
}

function applySequence(model: ValidModel, seq: Sequence) {
  if (seq.steps.max && !seq.steps.all && seq.steps.count >= seq.steps.max) {
    return false
  }
  seq.steps.count++

  let matches = findMatches(model, seq)
  if (matches.length === 0) return false

  model.count++

  if (seq.steps.all) {
    for (const match of matches) {
      applyRule(model, seq, match)
    }

    model.count += matches.length
    seq.steps.count = Infinity
  } else {
    const random = Math.floor(Math.random() * matches.length)
    const match = matches[random]

    applyRule(model, seq, match)
  }

  return true
}

function delay(ms: number = 0) {
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

function getSequences(rules: Rule): Sequence[] {
  const list = Array.isArray(rules) ? rules : expandRules(rules)
  const seqs: Sequence[] = []

  for (const rule of list) {
    const [instruction, steps] = rule.split(' ')
    const pair = instruction.split('=')

    if (pair[0].length !== pair[1].length)
      throw new Error(`{FROM} and {TO} patterns must be equal in length: ${instruction}`)
    for (let c = 0; c < pair[0].length; c++) {
      if ((pair[0][c] === '/' && pair[1][c] !== '/') || (pair[0][c] !== '/' && pair[1][c] === '/')) {
        throw new Error(`Step characters (/) must occur in the same positions: ${instruction}`)
      }
    }

    seqs.push({ from: pair[0], to: pair[1], steps: getSteps(steps) })
  }

  return seqs
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
