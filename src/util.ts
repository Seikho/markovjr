import chalk from 'chalk'
import { Color } from './types'

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
  B: 0x000000,
  I: 0x222e53,
  P: 0x7d2953,
  E: 0x008551,
  N: 0xa95238,
  D: 0x5f5750,
  A: 0xe6e6e6,
  W: 0xfff1e8,
  R: 0xff07f3,
  O: 0xffa108,
  Y: 0xfeeb2c,
  G: 0x00e339,
  U: 0x2cabfe,
  S: 0x82759a,
  K: 0xff76a6,
  F: 0xffcaa8,
}

export function reset(text: string) {
  return chalk.reset(text)
}