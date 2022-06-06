import { generate } from './generate'
import { Grid2D, Grid3D, Input2D, Input3D, Model, Rule } from './types'
import { terminal, reset, iterate3D, iterate2D } from './util'

type Coord = [number, number] | readonly [number, number]
type Coord3D = [number, number, number] | readonly [number, number, number]

type DrawOpts = {
  start?: Coord
  size?: Coord
  char?: string
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

      output += terminal[color] ? terminal[color](' ') : reset(color)
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

export function grid2D(opts: Omit<DrawOpts, 'rules'>): Grid2D {
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

export function grid3D(opts: { start: Coord3D; size: Coord3D; char?: string }): Grid3D {
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
  const model = generate({ type: '2d', grid: input, rules: opts.rules, log: { frequency: 1 } })

  pretty(model)

  return model
}

export function pretty(model: Model) {
  const colors = colorize(model)

  for (let i = 0; i < colors.length; i++) {
    process.stdout.cursorTo(0, i)
    process.stdout.clearLine(0)
    process.stdout.write(colors[i] + '\n')
  }
}
