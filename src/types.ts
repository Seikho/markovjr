export type Model = Model2D | Model3D

export type Model2D = {
  type: '2d'
  grid: Grid2D
  rules: Rule[]
}

export type Model3D = {
  type: '3d'
  grid: Grid3D
  rules: Rule[]
}

export type Steps = {
  seed?: () => number
  all?: boolean
  max?: number
  count: number
}

export type Grid = Grid2D | Grid3D
export type Rule = string
export type Sequence = { from: string; to: string; steps: Steps }
export type Point = Point2D | Point3D
export type Direction = Dir2D | Dir3D
export type Match = Match2D | Match3D

export type Grid2D = { input: Input2D }
export type Input2D = string[]
export type Point2D = { x: number; y: number }
export type Dir2D = 'x-1' | 'x+1' | 'y-1' | 'y+1'

export type Grid3D = { input: Input3D }
export type Input3D = Array<string[]>
export type Point3D = { x: number; y: number; z: number }
export type Dir3D = 'x-1' | 'x+1' | 'y-1' | 'y+1' | 'z-1' | 'z+1'

export type Shift = '/'

export type Match2D = { x: number; y: number; dir: Dir2D }
export type Match3D = { x: number; y: number; z: number; dir: Dir3D }

export type Color = 'B' | 'I' | 'P' | 'E' | 'N' | 'D' | 'A' | 'W' | 'R' | 'O' | 'Y' | 'G' | 'U' | 'S' | 'K' | 'F'

export type OnDone = (model: Model) => any

export type Union = { symbol: string; union: Set<string> }

export type ValidModel = ValidModel2D | ValidModel3D

export type ValidModel2D = Model2D & {
  count: number
  freq?: number
  sequences: Array<Sequence[]>
  unions: { [symbol: string]: Set<string> }
}

export type ValidModel3D = Model3D & {
  count: number
  freq?: number
  sequences: Array<Sequence[]>
  unions: { [symbol: string]: Set<string> }
}
