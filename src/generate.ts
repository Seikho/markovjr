import { applyRule, findMatches, validateGrid } from './transform'
import { Model, OnDone as ModelCallback, Rule, Sequence } from './types'

type TrackedModel = Model & { count: number; freq?: number }

export function generate(opts: Model) {
  validateGrid(opts)
  const model: TrackedModel = { ...opts, count: 0 }
  const sequences = model.rules.map(getSequences)

  for (const sequence of sequences) {
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

let INC = 1000 / 60
let NEXT = 0

async function render(cb: ModelCallback, model: Model) {
  if (Date.now() >= NEXT) {
    cb(model)
    await delay(0)
    NEXT += INC
  }
}

export function slowGenerate(opts: Model, callback: ModelCallback, onDone?: ModelCallback) {
  validateGrid(opts)
  const model: TrackedModel = { ...opts, count: 0 }
  const sequences = model.rules.map(getSequences)
  let stopped = false
  NEXT = Date.now() + INC

  const runner = async () => {
    for (const sequence of sequences) {
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

function applySequence(model: TrackedModel, seq: Sequence) {
  if (seq.max && seq.max !== Infinity && seq.count >= seq.max) {
    return false
  }
  seq.count++

  let matches = findMatches(model, seq)
  if (matches.length === 0) return false

  model.count++

  if (seq.max === Infinity) {
    for (const match of matches) {
      applyRule(model, seq, match)
    }

    model.count += matches.length
    seq.count = Infinity
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

function getSequences(rules: Rule): Sequence[] {
  const list = Array.isArray(rules) ? rules : expandRules(rules)
  const seqs: Sequence[] = []

  for (const rule of list) {
    const [instruction, steps] = rule.split(' ')
    const pair = instruction.split('=')

    if (steps && !steps.startsWith('#')) {
      console.log(steps)
      throw new Error(`Steps must start with '#'`)
    }

    if (pair[0].length !== pair[1].length)
      throw new Error(`{FROM} and {TO} patterns must be equal in length: ${instruction}`)
    for (let c = 0; c < pair[0].length; c++) {
      if ((pair[0][c] === '/' && pair[1][c] !== '/') || (pair[0][c] !== '/' && pair[1][c] === '/')) {
        throw new Error(`Step characters (/) must occur in the same positions: ${instruction}`)
      }
    }

    const max = steps === '#ALL' ? Infinity : steps ? Number(steps.slice(1)) : undefined
    seqs.push({ from: pair[0], to: pair[1], max, count: 0 })
  }

  return seqs
}

function expandRules(rules: string) {
  return rules.split(',').map((rule) => rule.trim())
}
