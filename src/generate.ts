import { pretty } from './helper'
import { applyRule, findMatches, validateGrid } from './transform'
import { Model, Rule, Sequence } from './types'

export function generate(model: Model) {
  validateGrid(model)

  const freq = model.log?.frequency
  const sequences = model.rules.map(getSequences)
  let count = 0

  for (const sequence of sequences) {
    while (true) {
      let matched = false

      for (const seq of sequence) {
        seq.count++

        if (seq.max && seq.count > seq.max) {
          matched = false
          break
        }

        const matches = findMatches(model, seq)
        if (matches.length === 0) continue

        count++
        matched = true
        const random = Math.floor(Math.random() * matches.length)
        const match = matches[random]
        applyRule(model, seq, match)

        if (freq && count % freq === 0) {
          pretty(model)
        }
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
export async function slowGenerate(model: Model, delay: number) {
  validateGrid(model)
  console.clear()

  const freq = model.log?.frequency
  const sequences = model.rules.map(getSequences)
  let count = 0

  for (const sequence of sequences) {
    while (true) {
      let matched = false

      for (const seq of sequence) {
        seq.count++

        if (seq.max && seq.count > seq.max) {
          matched = false
          break
        }

        const matches = findMatches(model, seq)
        if (matches.length === 0) continue

        count++
        matched = true
        const random = Math.floor(Math.random() * matches.length)
        const match = matches[random]
        applyRule(model, seq, match)

        if (freq && count % freq === 0) {
          await wait(delay)
          pretty(model, seq)
        }
      }

      if (!matched) break
    }
  }

  return model
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

    const max = steps ? Number(steps.slice(1)) : undefined
    seqs.push({ from: pair[0], to: pair[1], max, count: 0 })
  }

  return seqs
}
