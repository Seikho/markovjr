export type Model = {
  grid: Grid
  rules: Rule[]
  log?: {
    frequency: number
  }
}

export type Grid = Grid2D | Grid3D
export type Rule = string | string[]
export type Sequence = { from: string; to: string; max?: number; count: number }
export type Point = Point2D | Point3D
export type Direction = Dir2D | Dir3D
export type Match = Match2D | Match3D

export type Grid2D = { type: '2d'; input: Input2D }
export type Input2D = string[]
export type Point2D = { x: number; y: number }
export type Dir2D = 'x-1' | 'x+1' | 'y-1' | 'y+1'

export type Grid3D = { type: '3d'; input: Input3D }
export type Input3D = Array<string[]>
export type Point3D = { x: number; y: number; z: number }
export type Dir3D = 'x-1' | 'x+1' | 'y-1' | 'y+1' | 'z-1' | 'z+1'

export type Shift = '/'

export type Match2D = { x: number; y: number; dir: Dir2D }
export type Match3D = { x: number; y: number; z: number; dir: Dir3D }

export type Color = 'B' | 'I' | 'P' | 'E' | 'N' | 'D' | 'A' | 'W' | 'R' | 'O' | 'Y' | 'G' | 'U' | 'S' | 'K' | 'F'