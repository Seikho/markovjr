export type Model = {
  grid: Grid
  rules: Rule[]
  log?: {
    frequency: number
  }
}

export type Rule = string | string[]

export type Input2D = string[]

export type Input3D = Array<string[]>

export type Grid = { type: '2d'; input: string[] } | { type: '3d'; input: Array<string[]> }
