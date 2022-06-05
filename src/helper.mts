import { colorize, generate, Input2d, Rule } from './index.mjs'

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

export async function draw(opts: DrawOpts) {
  const input = grid(opts)
  const output = await generate(input, opts.rules, { end: 100000, print: true, freq: 1 })
  console.clear()
  console.log(colorize(output).toString())

  return output
}

export async function pretty(inputs: Promise<Input2d> | Input2d) {
  console.clear()
  console.log(colorize(await inputs).toString())
}
