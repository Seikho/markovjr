import {
  Dir2D,
  Dir3D,
  Input2D,
  Input3D,
  Match,
  Match2D,
  Match3D,
  Model,
  Point2D,
  Point3D,
  Rule,
  ValidModel,
  ValidModel2D,
  ValidModel3D,
} from './types'

export function validateGrid(model: Model) {
  for (let i = 0; i < model.rules.length; i++) {
    const rules = model.rules[i]
    if (typeof rules === 'string') {
      model.rules[i] = rules.replace(/\s+/, ' ')
      continue
    }
  }

  if (model.type === '2d') {
    const length = model.grid.input[0].length
    for (const input of model.grid.input) {
      if (input.length !== length) {
        throw new Error('2D grid is not uniform')
      }
    }
  }

  if (model.type === '3d') {
    const length = model.grid.input[0][0].length
    for (const y of model.grid.input)
      for (const input of y) {
        if (input.length !== length) {
          throw new Error('3D grid is not uniform')
        }
      }
  }
}

export function applyRule(model: ValidModel, { from, to }: Rule, match: Match) {
  if (model.type === '2d') {
    const start = { x: match.x, y: match.y }
    let curr: Point2D | undefined

    for (let i = 0; i < from.length; i++) {
      let char = to[i]
      curr = !curr ? { ...start } : next2D(model.grid.input, start, curr, match.dir as Dir2D, char)!
      if (isYshift(char)) char = to[++i]

      model.grid.input[curr.y] = replace(model.grid.input[curr.y], curr.x, char)
    }

    return
  }

  const start = { x: match.x, y: match.y, z: (match as Match3D).z }
  let curr: Point3D | undefined

  for (let i = 0; i < from.length; i++) {
    let char = to[i]
    curr = !curr ? { ...start } : next3D(model.grid.input, start, curr, match.dir as Dir3D, char)!
    if (isYshift(char)) char = to[++i]

    model.grid.input[curr.z][curr.y] = replace(model.grid.input[curr.z][curr.y], curr.x, char)
  }

  return
}

export function findMatches(model: ValidModel, rule: Rule): Match[] {
  const matches: Match[] = []
  if (model.type === '2d') {
    for (let y = 0; y < model.grid.input.length; y++) {
      for (let x = 0; x < model.grid.input[0].length; x++) {
        matches.push(...findMatchesAt2D(model, rule, x, y))
      }
    }

    return matches
  }

  for (let z = 0; z < model.grid.input.length; z++) {
    for (let y = 0; y < model.grid.input[0].length; y++) {
      for (let x = 0; x < model.grid.input[0][0].length; x++) {
        matches.push(...findMatchesAt3D(model, rule, x, y, z))
      }
    }
  }
  return matches
}

const DIR_2D: Dir2D[] = ['x+1', 'x-1', 'y+1', 'y-1']
const DIR_3D: Dir3D[] = ['x+1', 'x-1', 'y+1', 'y-1', 'z+1', 'z-1']

function findMatchesAt2D(model: ValidModel2D, { from }: Rule, x: number, y: number) {
  const matches: Match2D[] = []
  const start = { x, y }

  for (const dir of DIR_2D) {
    let curr: Point2D | undefined
    let matched = true

    for (let i = 0; i < from.length; i++) {
      let char = from[i]

      curr = !curr ? { x, y } : next2D(model.grid.input, start, curr, dir, char)

      if (!curr) {
        matched = false
        break
      }

      if (isYshift(char)) char = from[++i]

      if (model.unions[char] && model.unions[char].has(model.grid.input[curr.y][curr.x])) {
        continue
      }

      if (char !== '*' && char !== model.grid.input[curr.y][curr.x]) {
        matched = false
        break
      }
    }

    if (matched) matches.push({ x, y, dir })
  }

  return matches
}

function findMatchesAt3D(model: ValidModel3D, { from }: Rule, x: number, y: number, z: number) {
  const matches: Match3D[] = []
  const start = { x, y, z }

  for (const dir of DIR_3D) {
    let curr: Point3D | undefined
    let matched = true

    for (let i = 0; i < from.length; i++) {
      let char = from[i]
      curr = !curr ? { x, y, z } : next3D(model.grid.input, start, curr, dir, char)

      if (!curr) {
        matched = false
        break
      }

      if (isYshift(char)) char = from[++i]

      if (model.unions[char] && !model.unions[char].has(model.grid.input[curr.z][curr.y][curr.x])) {
        matched = false
        break
      }

      if (char !== '*' && char !== model.grid.input[curr.z][curr.y][curr.x]) {
        matched = false
        break
      }
    }

    if (matched) matches.push({ x, y, z, dir })
  }

  return matches
}

function next2D(
  inputs: Input2D,
  start: Point2D,
  curr: Point2D,
  dir: Dir2D,
  char: string
): Point2D | undefined {
  let point: Point2D | undefined

  if (isYshift(char)) {
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

function next3D(
  inputs: Input3D,
  start: Point3D,
  curr: Point3D,
  dir: Dir3D,
  char: string
): Point3D | undefined {
  let point: Point3D | undefined

  if (isYshift(char)) {
    point = shiftY3d(start, curr, dir)
  } else if (isZshift(char)) {
    point = shiftZ3d(start, curr, dir)
  }

  switch (dir) {
    case 'x-1': {
      point = { x: curr.x - 1, y: curr.y, z: curr.z }
      break
    }

    case 'x+1': {
      point = { x: curr.x + 1, y: curr.y, z: curr.z }
      break
    }

    case 'y-1': {
      point = { x: curr.x, y: curr.y - 1, z: curr.z }
      break
    }

    case 'y+1': {
      point = { x: curr.x, y: curr.y + 1, z: curr.z }
      break
    }

    case 'z-1': {
      point = { x: curr.x, y: curr.y, z: curr.z - 1 }
      break
    }

    case 'z+1': {
      point = { x: curr.x, y: curr.y, z: curr.z + 1 }
      break
    }
  }

  return isInBounds3D(inputs, point) ? point : undefined
}

function isInBounds3D(inputs: Input3D, point: Point3D) {
  if (
    point.x < 0 ||
    point.y < 0 ||
    point.z < 0 ||
    point.x >= inputs[0][0].length ||
    point.y >= inputs[0].length ||
    point.z >= inputs.length
  )
    return false
  return true
}

function shiftZ3d(start: Point3D, curr: Point3D, dir: Dir3D): Point3D {
  switch (dir) {
    case 'x-1':
      return { x: start.x, y: curr.y, z: curr.z - 1 }
    case 'x+1':
      return { x: start.x, y: curr.y, z: curr.z + 1 }
    case 'y-1':
      return { x: curr.x, y: start.y, z: curr.z - 1 }
    case 'y+1':
      return { x: curr.x, y: start.y, z: curr.z + 1 }
    case 'z-1':
      return { x: curr.x + 1, y: curr.y, z: start.x }
    case 'z+1':
      return { x: curr.x - 1, y: curr.y, z: start.x }
  }
}

function shiftY3d(start: Point3D, curr: Point3D, dir: Dir3D): Point3D {
  switch (dir) {
    case 'x-1':
      return { x: start.x, y: curr.y - 1, z: curr.z }

    case 'x+1':
      return { x: start.x, y: curr.y + 1, z: curr.z }

    case 'y-1':
      return { x: curr.x + 1, y: start.y, z: curr.z }

    case 'y+1':
      return { x: curr.x - 1, y: start.y, z: curr.z }

    case 'z-1':
      return { x: curr.x, y: curr.y - 1, z: start.z }

    case 'z+1':
      return { x: curr.x, y: curr.y + 1, z: start.z }
  }
}

function replace(text: string, pos: number, char: string) {
  if (char === '*') char = text[pos]
  return text.slice(0, pos) + char + text.slice(pos + 1)
}

function isZshift(text: string): text is ' ' {
  return text === ' '
}

function isYshift(text: string): text is '/' {
  return text === '/'
}
