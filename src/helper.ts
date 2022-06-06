import { generate } from '.'
import { Grid, Rule } from './types'
import { color, reset } from './util'

type Coord = [number, number] | readonly [number, number]

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
        output += color[input[x]] ? color[input[x]](' ') : reset(input[x])
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

  const input: string[] = []

  for (let i = 0; i < h; i++) {
    if (i === y) input.push('B'.repeat(x) + char + 'B'.repeat(w - x - 1))
    else input.push('B'.repeat(w))
  }

  return { input: input, type: '2d' }
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
