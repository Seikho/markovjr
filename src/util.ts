import * as chalk from 'chalk'

export const color: { [char: string]: chalk.Chalk } = {
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

export function reset(text: string) {
  return chalk.reset(text)
}
