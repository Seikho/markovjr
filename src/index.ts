import { pretty } from './helper'
import { Grid, Input2D, Model, Rule } from './types'

type Sequence = { from: string; to: string; max?: number; count: number }
type Point2D = { x: number; y: number }

type Dir2D = 'x-1' | 'x+1' | 'y-1' | 'y+1'
type Dir3D = 'x-1' | 'x+1' | 'y-1' | 'y+1' | 'z-1' | 'z+1'
type Shift = '/'
type Match = { x: number; y: number; dir: Dir2D }

export function generate(model: Model) {
  validateGrid(model.grid)

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

        const matches = findMatches2D(model.grid, seq)
        if (matches.length === 0) continue

        count++
        matched = true
        const random = Math.floor(Math.random() * matches.length)
        const match = matches[random]
        applyRule(model.grid, seq, match)

        if (freq && count % freq === 0) {
          pretty(model.grid)
        }
      }

      if (!matched) break
    }
  }

  return model.grid
}

function findMatches2D(grid: Grid, seq: Sequence): Match[] {
  if (grid.type === '2d') {
    const matches: Match[] = []

    for (let y = 0; y < grid.input.length; y++) {
      for (let x = 0; x < grid.input[0].length; x++) {
        matches.push(...findMatchesAt2D(grid.input, seq, x, y))
      }
    }

    return matches
  }

  throw new Error('3D not supported')
}

const DIR_2D: Dir2D[] = ['x+1', 'x-1', 'y+1', 'y-1']

function findMatchesAt2D(inputs: Input2D, { from }: Sequence, x: number, y: number) {
  const matches: Match[] = []
  const start = { x, y }

  for (const dir of DIR_2D) {
    let curr: Point2D | undefined
    let matched = true

    for (let i = 0; i < from.length; i++) {
      let char = from[i]
      curr = !curr ? { x, y } : next2D(inputs, start, curr, dir, char)

      if (!curr) {
        matched = false
        break
      }

      if (isShift(char)) char = from[++i]

      if (char !== '*' && char !== inputs[curr.y][curr.x]) {
        matched = false
        break
      }
    }

    if (matched) {
      matches.push({ x, y, dir })
    }
  }

  return matches
}

function isShift(text: string): text is Shift {
  return text === '/'
}

function next2D(inputs: Input2D, start: Point2D, curr: Point2D, dir: Dir2D, char: string) {
  let point: Point2D | undefined

  if (isShift(char)) {
    point = shift2D(start, curr, dir)
  }

  if (!point) {
    switch (dir) {
      case 'x-1': {
        point = { x: curr.x - 1, y: curr.y }
        break
      }

      case 'x+1': {
        point = { x: curr.x + 1, y: curr.y }
        break
      }

      case 'y-1': {
        point = { x: curr.x, y: curr.y - 1 }
        break
      }

      case 'y+1': {
        point = { x: curr.x, y: curr.y + 1 }
        break
      }
    }
  }

  if (point.x < 0 || point.y < 0 || point.x >= inputs[0].length || point.y >= inputs.length) return

  return point
}

function shift2D(start: Point2D, curr: Point2D, dir: Dir2D) {
  let point: Point2D

  switch (dir) {
    case 'x-1':
      point = { x: start.x, y: curr.y - 1 }
      break

    case 'x+1':
      point = { x: start.x, y: curr.y + 1 }
      break

    case 'y-1':
      point = { x: curr.x + 1, y: start.y }
      break

    case 'y+1':
      point = { x: curr.x - 1, y: start.y }
      break
  }

  return point
}

const VALID_SEQ = /[BIPENDAWROYGUSKF\/]+/
const VALID_GRID = /[BIPENDAWROYGUSKF\/]+/

function getSequences(rules: Rule): Sequence[] {
  const list = Array.isArray(rules) ? rules : [rules]
  const seqs: Sequence[] = []

  for (const rule of list) {
    const [instruction, steps] = rule.split(' ')
    const pair = instruction.split('=')

    if (steps && !steps.startsWith('#')) throw new Error(`Steps must start with '#'`)

    if (!VALID_SEQ.test(pair[0]) || !VALID_SEQ.test(pair[0])) {
      throw new Error(`Sequences can only contain characters: {BIPENDAWROYGUSKF/}`)
    }

    const max = steps ? Number(steps.slice(1)) : undefined
    seqs.push({ from: pair[0], to: pair[1], max, count: 0 })
  }

  return seqs
}

function applyRule(grid: Grid, { from, to }: Sequence, { x, y, dir }: Match) {
  if (grid.type === '2d') {
    const start = { x, y }
    let curr: Point2D | undefined

    for (let i = 0; i < from.length; i++) {
      let char = to[i]
      curr = !curr ? { x, y } : next2D(grid.input, start, curr, dir, char)!
      if (isShift(char)) char = to[++i]

      grid.input[curr.y] = replace(grid.input[curr.y], curr.x, char)
    }

    return
  }

  throw new Error('3D not supported')
}

function replace(text: string, pos: number, char: string) {
  if (char === '*') char = text[pos]
  return text.slice(0, pos) + char + text.slice(pos + 1)
}

function validateGrid(grid: Grid) {
  if (grid.type === '2d') {
    const length = grid.input[0].length
    for (const input of grid.input) {
      if (!VALID_GRID.test(input)) {
        throw new Error(`Grid row contains invalid characters. May only contain "BIPENDAWROYGUSKF" `)
      }

      if (input.length !== length) {
        throw new Error('2D grid is not uniform')
      }
    }
  }
}
