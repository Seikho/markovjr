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

type Sequence = [string, string]
type Coord2d = [number, number]

type Dir = 'l' | 'r' | 'u' | 'd'
type Match = [Coord2d, Dir]

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
    outputs.push(output)
  }

  outputs.toString = () => {
    const output = outputs.join('\n')
    return output
  }

  return outputs
}

function findMatches2D(inputs: Input2d, [from]: Sequence): Match[] {
  validate2d(inputs)

  const matches: Match[] = []

  const limit = {
    x: inputs[0].length - from.length,
    y: inputs.length - from.length,
  }

  for (let y = 0; y < inputs.length; y++) {
    const input = inputs[y]
    const rev = reverse(input)

    for (let x = 0; x < input.length; x++) {
      if (x <= limit.x) {
        if (isMatch(input.substring(x, x + from.length), from)) matches.push([[x, y], 'r'])
        if (isMatch(rev.substring(x, x + from.length), from)) matches.push([[x, y], 'l'])
      }
    }
  }

  for (let x = 0; x < inputs[0].length; x++) {
    const input = column(inputs, x)
    const rev = reverse(input)

    for (let y = 0; y < input.length; y++) {
      if (y <= limit.y) {
        if (isMatch(input.slice(y, y + from.length), from)) matches.push([[x, y], 'd'])
        if (isMatch(rev.slice(y, y + from.length), from)) matches.push([[x, y], 'u'])
      }
    }
  }

  return matches
}

function ruleSequence(rule: Rule) {
  const pairs = rule.split(' ')
  const sets = pairs.map((pair) => pair.split('=') as [string, string])
  return sets
}

function applyRule(inputs: Input2d, [from, to]: Sequence, [[x, y], dir]: Match) {
  const L = from.length
  switch (dir) {
    case 'l': {
      const input = reverse(inputs[y])
      inputs[y] = reverse(input.slice(0, x) + swap(input.slice(x, x + L), to) + input.slice(x + L))
      return inputs
    }

    case 'r': {
      const input = inputs[y]
      inputs[y] = input.slice(0, x) + swap(input.slice(x, x + L), to) + input.slice(x + L)
      return inputs
    }

    case 'u': {
      const input = reverse(column(inputs, x))
      const next = reverse(input.slice(0, y) + swap(input.slice(y, y + L), to) + input.slice(y + L))
      for (let ny = 0; ny < input.length; ny++) {
        inputs[ny] = inputs[ny].slice(0, x) + next[ny] + inputs[ny].slice(x + 1)
      }
      return inputs
    }

    case 'd': {
      const input = column(inputs, x)
      const next = input.slice(0, y) + swap(input.slice(y, y + L), to) + input.slice(y + L)
      for (let ny = 0; ny < input.length; ny++) {
        inputs[ny] = inputs[ny].slice(0, x) + next[ny] + inputs[ny].slice(x + 1)
      }
      return inputs
    }
  }
}

function validate2d(inputs: Input2d) {
  const length = inputs[0].length
  for (const input of inputs) {
    if (input.length !== length) throw new Error('2D Input is not uniform')
  }
}

function swap(from: string, to: string) {
  if (to.includes('*') === false) return to

  let swapped = ''
  for (let i = 0; i < from.length; i++) {
    swapped += to[i] === '*' ? from[i] : to[i]
  }

  return swapped
}

function isMatch(left: string, right: string) {
  for (let i = 0; i < left.length; i++) {
    if (left[i] === '*' || right[i] === '*') continue
    if (left[i] !== right[i]) return false
  }

  return true
}

function reverse(text: string) {
  let output = ''
  for (let i = 0; i < text.length; i++) {
    output += text[text.length - 1 - i]
  }
  return output
}

function column(input: Input2d, x: number) {
  let output = ''

  for (let y = 0; y < input.length; y++) {
    output += input[y][x]
  }

  return output
}
