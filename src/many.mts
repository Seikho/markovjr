import { colorize, generate, Input2d, Rule } from './index.mjs'

type Config = { input: Input2d; rules: Rule[] }
type Coord = [number, number] | readonly [number, number]

const grids = {
  small: [20, 20],
  big: [Math.floor(process.stdout.columns / 2), Math.floor(process.stdout.rows / 2)],
  full: [Math.floor(process.stdout.columns - 10), Math.floor(process.stdout.rows - 10)],
} as const

const start = {
  topleft: [0, 0],
  big: [Math.floor(grids.big[0] / 2), Math.floor(grids.big[1] / 2)],
  full: [Math.floor(grids.full[0] / 2), Math.floor(grids.full[1] / 2)],
} as const

const map: { [key: string]: () => Config } = {
  growth: () => ({ input: grid([9, 9]), rules: ['WB=WW'] }),
  maze: () => ({ input: grid(), rules: ['WBB=WAW'] }),
  bigmaze: () => ({ input: grid([0, 0], grids.big), rules: ['WBB=WAW'] }),
  biggrowth: () => ({ input: grid(start.big, grids.big), rules: ['WB=WW'] }),
}

const arg = process.argv[2] || 'growth'
const func = map[arg]

if (!func) throw new Error(`Cannot find match for "arg"`)

const { input, rules } = func()

const output = colorize(generate(input, rules, { end: 100000, print: true, freq: 10 }))

console.clear()
console.log(output.toString())
console.log(arg)

function grid([x, y]: Coord = [20, 20], [w, h]: Coord = [0, 0]) {
  const input: string[] = []

  for (let i = 0; i < h; i++) {
    if (i === y) input.push('|' + 'B'.repeat(x) + 'W' + 'B'.repeat(w - x - 1) + '|')
    else input.push('|' + 'B'.repeat(w) + '|')
  }

  return input
}

function biggrid([x, y] = [0, 0]) {
  return grid([x, y], [Math.floor(process.stdout.columns / 2), Math.floor(process.stdout.rows / 2)])
}
