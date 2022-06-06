import { generate } from './generate'
import { Color, Grid, Input2D, Input3D, Rule } from './types'
import { terminal, reset } from './util'

type Coord = [number, number] | readonly [number, number]
type Coord3D = [number, number, number] | readonly [number, number, number]

type DrawOpts = {
  start?: Coord
  size?: Coord
  char?: string
  rules: Rule[]
}

export function colorize(grid: Grid) {
  if (grid.type === '2d') {
    const outputs: string[] = []
    for (let y = 0; y < grid.input.length; y++) {
      let output = ''
      const input = grid.input[y]
      for (let x = 0; x < input.length; x++) {
        output += terminal[input[x] as Color] ? terminal[input[x] as Color](' ') : reset(input[x])
      }
      outputs.push('|' + output + '|')
    }

    outputs.toString = () => {
      const output = outputs.join('\n')
      return output
    }

    return outputs
  }

  throw new Error('3D not yet supported')
}

export function grid2D(opts: Omit<DrawOpts, 'rules'>): Grid {
  const { start = [0, 0], size = [40, 20], char = 'W' } = opts
  const [x, y] = start
  const [w, h] = size

  const input: Input2D = []

  for (let i = 0; i < h; i++) {
    if (i === y) input.push('B'.repeat(x) + char + 'B'.repeat(w - x - 1))
    else input.push('B'.repeat(w))
  }

  return { input, type: '2d' }
}

export function grid3D(opts: { start: Coord3D; size: Coord3D; char?: string }): Grid {
  const { start = [0, 0, 0], size = [40, 40, 40], char = 'W' } = opts
  const [x, y, z] = start
  const [w, h, d] = size

  const input: Input3D = []

  for (let i = 0; i < d; i++) {
    const row: Input2D = []
    for (let j = 0; j < h; j++) {
      if (i === z && j === y) row.push('B'.repeat(x) + char + 'B'.repeat(w - x - 1))
      else row.push('B'.repeat(w))
    }
    input.push(row)
  }

  return { input, type: '3d' }
}

export function draw(opts: DrawOpts) {
  const input = grid2D(opts)
  const grid = generate({ grid: input, rules: opts.rules, log: { frequency: 1 } })

  pretty(grid)

  return grid
}

export function pretty(grid: Grid) {
  const colors = colorize(grid)

  for (let i = 0; i < colors.length; i++) {
    process.stdout.cursorTo(0, i)
    process.stdout.clearLine(0)
    process.stdout.write(colors[i] + '\n')
  }
}
