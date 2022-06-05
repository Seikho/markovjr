import chalk, { ChalkInstance } from 'chalk'

const color: { [char: string]: ChalkInstance } = {
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

export type Rule = string
export type Input2d = string[]
type Options = {
  end?: number
  print?: boolean
  freq?: number
}

type Sequence = { from: string; to: string }
type Point2D = { x: number; y: number }

type Dir2D = 'x-1' | 'x+1' | 'y-1' | 'y+1'
type Shift = '/'
type Match = { x: number; y: number; dir: Dir2D }

export function generate(
  inputs: Input2d,
  rules: Rule[],
  { end = Infinity, print = false, freq = 1 }: Options = {}
): Input2d {
  const sequences = rules.map(ruleSequence)
  let count = 0

  for (const sequence of sequences) {
    while (true) {
      if (count >= end) return inputs

      let matched = false
      for (const seq of sequence) {
        const matches = findMatches2D(inputs, seq)
        if (matches.length === 0) continue

        count++
        matched = true
        const random = Math.floor(Math.random() * matches.length)
        const match = matches[random]
        applyRule(inputs, seq, match)

        if (print && count % freq === 0) {
          console.clear()
          console.log(colorize(inputs).toString())
        }
      }
      if (!matched) break
    }
  }

  return inputs
}

export function colorize(inputs: Input2d) {
  const outputs: Input2d = []
  for (let y = 0; y < inputs.length; y++) {
    let output = ''
    const input = inputs[y]
    for (let x = 0; x < input.length; x++) {
      output += color[input[x]] ? color[input[x]](' ') : chalk.reset(input[x])
    }
    outputs.push('|' + output + '|')
  }

  outputs.toString = () => {
    const output = outputs.join('\n')
    return output
  }

  return outputs
}

function findMatches2D(inputs: Input2d, seq: Sequence): Match[] {
  validate2D(inputs)

  const matches: Match[] = []

  for (let y = 0; y < inputs.length; y++) {
    for (let x = 0; x < inputs[0].length; x++) {
      matches.push(...findMatchesAt2D(inputs, seq, x, y))
    }
  }

  return matches
}

const DIR_2D: Dir2D[] = ['x+1', 'x-1', 'y+1', 'y-1']

function findMatchesAt2D(inputs: Input2d, { from }: Sequence, x: number, y: number) {
  const matches: Match[] = []
  const start = { x, y }

  for (const dir of DIR_2D) {
    let curr: Point2D | undefined
    let matched = true

    for (let i = 0; i < from.length; i++) {
      let char = from[i]
      curr = !curr ? { x, y } : next2D(inputs, start, curr, dir, char)

      if (!curr) {
        matched = false
        break
      }

      if (isShift(char)) char = from[++i]

      if (char !== '*' && char !== inputs[curr.y][curr.x]) {
        matched = false
        break
      }
    }

    if (matched) {
      matches.push({ x, y, dir })
    }
  }

  return matches
}

function isShift(text: string): text is Shift {
  return text === '/'
}

function next2D(inputs: Input2d, start: Point2D, curr: Point2D, dir: Dir2D, char: string) {
  let point: Point2D | undefined

  if (isShift(char)) {
    point = shift2D(start, curr, dir)
  }

  if (!point) {
    switch (dir) {
      case 'x-1': {
        point = { x: curr.x - 1, y: curr.y }
        break
      }

      case 'x+1': {
        point = { x: curr.x + 1, y: curr.y }
        break
      }

      case 'y-1': {
        point = { x: curr.x, y: curr.y - 1 }
        break
      }

      case 'y+1': {
        point = { x: curr.x, y: curr.y + 1 }
        break
      }
    }
  }

  if (point.x < 0 || point.y < 0 || point.x >= inputs[0].length || point.y >= inputs.length) return

  return point
}

function shift2D(start: Point2D, curr: Point2D, dir: Dir2D) {
  let point: Point2D

  switch (dir) {
    case 'x-1':
      point = { x: start.x, y: curr.y - 1 }
      break

    case 'x+1':
      point = { x: start.x, y: curr.y + 1 }
      break

    case 'y-1':
      point = { x: curr.x + 1, y: start.y }
      break

    case 'y+1':
      point = { x: curr.x - 1, y: start.y }
      break
  }

  return point
}

function ruleSequence(rule: Rule): Sequence[] {
  const rules = rule.split(' ')
  const seqs: Sequence[] = []
  for (const rule of rules) {
    const pair = rule.split('=')
    seqs.push({ from: pair[0], to: pair[1] })
  }
  return seqs
}

function applyRule(inputs: Input2d, { from, to }: Sequence, { x, y, dir }: Match) {
  const start = { x, y }
  let curr: Point2D | undefined

  for (let i = 0; i < from.length; i++) {
    let char = to[i]
    curr = !curr ? { x, y } : next2D(inputs, start, curr, dir, char)!
    if (isShift(char)) char = to[++i]

    inputs[curr.y] = replace(inputs[curr.y], curr.x, char)
  }
}

function replace(text: string, pos: number, char: string) {
  if (char === '*') char = text[pos]
  return text.slice(0, pos) + char + text.slice(pos + 1)
}

function validate2D(inputs: Input2d) {
  const length = inputs[0].length
  for (const input of inputs) {
    if (input.length !== length) {
      throw new Error('2D Input is not uniform')
    }
  }
}
