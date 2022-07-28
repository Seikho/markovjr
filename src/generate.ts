import { pretty } from './helper'
import { applyRule, findMatches, validateGrid } from './transform'
import { Model, Rule, Sequence } from './types'

type TrackedModel = Model & { count: number; freq?: number }

export function generate(opts: Model) {
  validateGrid(opts)
  const model: TrackedModel = { ...opts, count: 0, freq: opts.log?.frequency }
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
export function slowGenerate(opts: Model, delay: number, callback: (model: Model) => any, onDone?: Function) {
  validateGrid(opts)
  const model: TrackedModel = { ...opts, count: 0, freq: opts.log?.frequency }
  const sequences = model.rules.map(getSequences)

  let stopped = false

  const runner = async () => {
    for (const sequence of sequences) {
      while (!stopped) {
        let matched = false

        for (const seq of sequence) {
          matched = applySequence(model, seq)
          if (seq.max === Infinity && model.freq) {
            await wait(delay)
            callback(model)
          } else {
            if (model.freq && model.count % model.freq === 0) {
              await wait(delay)
              callback(model)
            }
          }
        }

        if (!matched) break
      }
    }

    onDone?.()
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
    if (model.freq) {
      pretty(model)
    }
  } else {
    const random = Math.floor(Math.random() * matches.length)
    const match = matches[random]

    applyRule(model, seq, match)
    if (model.freq && model.count % model.freq === 0) {
      pretty(model)
    }
  }

  return true
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function getSequences(rules: Rule): Sequence[] {
  const list = Array.isArray(rules) ? rules : [rules]
  const seqs: Sequence[] = []

  for (const rule of list) {
    const [instruction, steps] = rule.split(' ')
    const pair = instruction.split('=')

    if (steps && !steps.startsWith('#')) throw new Error(`Steps must start with '#'`)

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
