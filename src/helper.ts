import { colorize, generate } from '.'
import { Input2D, Rule } from './types'

type Coord = [number, number] | readonly [number, number]

type DrawOpts = {
  start?: Coord
  size?: Coord
  char?: string
  rules: Rule[]
}

export function grid(opts: Omit<DrawOpts, 'rules'>) {
  const { start = [0, 0], size = [40, 20], char = 'W' } = opts
  const [x, y] = start
  const [w, h] = size

  const input: string[] = []

  for (let i = 0; i < h; i++) {
    if (i === y) input.push('B'.repeat(x) + char + 'B'.repeat(w - x - 1))
    else input.push('B'.repeat(w))
  }

  return input
}

export function draw(opts: DrawOpts) {
  const input = grid(opts)
  const output = generate({ grid: input, rules: opts.rules, log: { frequency: 1 } })
  console.clear()
  console.log(colorize(output).toString())

  return output
}

export function pretty(inputs: Input2D) {
  console.clear()
  console.log(colorize(inputs).toString())
}
