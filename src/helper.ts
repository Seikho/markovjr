import { generate } from './generate'
import { Color, Grid2D, Grid3D, Input2D, Input3D, Model, Rule, Sequence } from './types'
import { terminal, reset, iterate3D, iterate2D } from './util'

type Coord2D = [number, number] | readonly [number, number]
type Coord3D = [number, number, number] | readonly [number, number, number]

type DrawOpts = {
  start?: Coord2D
  size?: Coord2D
  char?: Color
  rules: Rule[]
}

export function colorize(model: Model) {
  if (model.type === '2d') {
    let cy: number
    const outputs: string[] = []
    let output = ''

    iterate2D(model, (_, y, color) => {
      if (cy === undefined) cy = y
      if (y !== cy) {
        outputs.push(output)
        output = ''
        cy = y
      }

      output += terminal[color] ? terminal[color](' ') : reset(' ')
    })

    outputs.toString = () => {
      const output = outputs.join('\n')
      return output
    }

    return outputs
  }

  const outputs: Array<string[]> = []
  let cz: number
  let cy: number

  let outputY: string[] = []
  let output = ''

  iterate3D(model, (_, y, z, color) => {
    if (cz === undefined) cz = z
    if (cy === undefined) cy = y

    if (cy !== y) {
      outputY.push(output)
      output = ''
      cy = y
    }

    if (cz !== z) {
      outputs.push(outputY)
      outputY = []
      cz = z
    }

    output += terminal[color] ? terminal[color](' ') : reset(color)
  })

  outputs.toString = () => {
    let all = ''

    for (const z of outputs) {
      all += z.join('\n') + '\n' + '\n'
    }

    return all
  }

  return outputs
}

/**
 *
 * @param input Typically a template string. The characters should present a rectangle or a square.
 * @param depth The number of rows to create along the Z-axis. Defaults to 1.
 */
export function stringToGrid(input: string, depth = 1): Grid3D {
  const y = input.split('\n').map((line) => line.trim())

  const grid: Input3D = []
  for (let cz = 0; cz < depth; cz++) {
    grid.push(y.map((line) => line))
  }

  return { input: grid }
}

export type Grid2DOpts = {
  start?: Coord2D
  size?: Coord2D
  char?: Color
}

export function grid2D(opts: Grid2DOpts): Grid2D {
  const { start = [0, 0], size = [40, 20], char = 'B' } = opts
  const [x, y] = start
  const [w, h] = size

  const input: Input2D = []

  for (let i = 0; i < h; i++) {
    if (i === y) input.push('B'.repeat(x) + char + 'B'.repeat(w - x - 1))
    else input.push('B'.repeat(w))
  }

  return { input }
}

export function grid3D(opts: { start?: Coord3D; size?: Coord3D; char?: Color }): Grid3D {
  const { start = [0, 0, 0], size = [40, 40, 40], char = 'B' } = opts
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

  return { input }
}

export function draw(opts: DrawOpts) {
  const input = grid2D(opts)
  const model = generate({ type: '2d', grid: input, rules: opts.rules, log: { frequency: 1 } })

  pretty(model)

  return model
}

export function pretty(model: Model, seq?: Sequence) {
  if (typeof window !== 'undefined') return

  const colors = colorize(model)

  for (let i = 0; i < colors.length; i++) {
    process.stdout.cursorTo(0, i)
    process.stdout.clearLine(0)
    process.stdout.write(colors[i] + '\n')
  }

  if (seq) {
    process.stdout.clearLine(0)
    process.stdout.write(`${seq.from}=${seq.to}`)
  }
}
