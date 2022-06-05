import { colorize, generate, Input2d, Rule } from './index.mjs'

type Config = { input: Input2d; rules: Rule[] }
type Coord = [number, number] | readonly [number, number]

const grids = {
  small: [40, 20],
  big: [Math.floor(process.stdout.columns / 2), Math.floor(process.stdout.rows / 2)],
  full: [Math.floor(process.stdout.columns - 10), Math.floor(process.stdout.rows - 10)],
} as const

const start = {
  topleft: [0, 0],
  big: [Math.floor(grids.big[0] / 2), Math.floor(grids.big[1] / 2)],
  full: [Math.floor(grids.full[0] / 2), Math.floor(grids.full[1] / 2)],
} as const

const map: { [key: string]: () => void } = {
  growth: () => draw({ start: [9, 9], rules: ['WB=WW'] }),
  maze: () => draw({ start: [2, 2], size: [40, 21], rules: ['WBB=WAW'] }),
  bigmaze: () => draw({ start: [0, 0], size: grids.big, rules: ['WBB=WAW'] }),
  biggrowth: () => draw({ start: start.big, size: grids.big, rules: ['WB=WW'] }),
  floor: () => draw({ start: [1, 1], size: [60, 40], rules: ['PBB=**P'], char: 'P' }),
  squares: () => draw({ start: [1, 1], size: [40, 20], rules: ['BBBB/BBBB/BBBB/BBBB=BBBB/BWWB/BWWB/BBBB'], char: 'B' }),
}

const arg = process.argv[2] || 'growth'
const func = map[arg]

if (!func) throw new Error(`Cannot find match for "arg"`)

func()
console.log(arg)

type DrawOpts = {
  start?: Coord
  size?: Coord
  char?: string
  rules: Rule[]
}

function draw(opts: DrawOpts) {
  const { start = [0, 0], size = [40, 20], char = 'W', rules } = opts
  const [x, y] = start
  const [w, h] = size

  const input: string[] = []

  for (let i = 0; i < h; i++) {
    if (i === y) input.push('B'.repeat(x) + char + 'B'.repeat(w - x - 1))
    else input.push('B'.repeat(w))
  }

  const output = generate(input, rules, { end: 100000, print: true, freq: 1 })
  console.clear()
  console.log(colorize(output).toString())

  return output
}
