export type Model = {
  grid: Input2D
  rules: Rule[]
  log?: {
    frequency: number
  }
}

export type Rule = string | string[]

export type Input2D = string[]

export type Input3D = Array<string[]>
