import chalk from 'chalk'
import { Color, Model2D, Model3D } from './types'

export const terminal: { [char in Color]: chalk.Chalk } = {
  B: chalk.bgBlack,
  I: chalk.bgBlue,
  P: chalk.bgMagenta,
  E: chalk.bgGreen,
  N: chalk.bgHex('#A95238'),
  D: chalk.bgGray,
  A: chalk.bgHex('#E6E6E6'),
  W: chalk.bgWhite,
  R: chalk.bgRed,
  O: chalk.bgHex('#FFA108'),
  Y: chalk.bgYellow,
  G: chalk.bgGreenBright,
  U: chalk.bgCyan,
  S: chalk.bgHex('#82759A'),
  K: chalk.bgHex('#FF76A6'),
  F: chalk.bgHex('#FFCAA8'),
}

export const hexColor: { [char in Color]: number } = {
  A: 0xe6e6e6,
  B: 0x000000,
  C: 0x92eb34,
  D: 0x5f5750,
  E: 0x184a01,
  F: 0xffcaa8,
  G: 0x50fc00,
  H: 0x8934eb,
  I: 0x222e53,
  J: 0x3a4142,
  K: 0xff76a6,
  L: 0xd694c2,
  M: 0xde7d57,
  N: 0xa95238,
  O: 0xffa108,
  P: 0x7d2953,
  Q: 0x85472e,
  R: 0xff074e,
  S: 0x82759a,
  T: 0x968a84,
  U: 0x2cabfe,
  V: 0xff8ff6,
  W: 0xfff1e8,
  X: 0xb0b0b0,
  Y: 0xfeeb2c,
  Z: 0x215963,
}

export const webColors = Object.entries(hexColor).reduce((prev, [key, hex]) => {
  prev[key] = '#' + hex.toString(16).padStart(6, '0')
  return prev
}, {} as { [char: string]: string })

if (typeof window !== 'undefined') {
  for (const [key, color] of Object.entries(hexColor)) {
    console.log(`${key}: %c           `, `background: #${color.toString(16)};`)
  }
}

export function getHexColor(color: string) {
  return hexColor[color as Color]
}

export function reset(text: string) {
  return chalk.reset(text)
}

export function iterate2D(
  model: Model2D,
  iterator: (x: number, y: number, color: Color) => void
): Model2D {
  for (let y = 0; y < model.grid.input.length; y++) {
    for (let x = 0; x < model.grid.input[0].length; x++) {
      iterator(x, y, model.grid.input[y][x] as Color)
    }
  }

  return model
}

export function iterate3D(
  model: Model3D,
  iterator: (x: number, y: number, z: number, color: Color) => void
): Model3D {
  for (let z = 0; z < model.grid.input.length; z++) {
    for (let y = 0; y < model.grid.input[0].length; y++) {
      for (let x = 0; x < model.grid.input[0][0].length; x++) {
        iterator(x, y, z, model.grid.input[z][y][x] as Color)
      }
    }
  }

  return model
}
