import { grid2D, grid3D } from './helper'
import { Model } from './types'

export function dungeon2D(): Model {
  return {
    type: '2d',
    grid: grid2D({ start: [1, 1], size: [100, 60], char: 'P' }),
    rules: [
      'PBB=**P',
      // Rooms
      'BPBPBPBPB/BBBBBBBBB/BPBPBPBPB/BBBBBBBBB/BPBPBPBPB=BWWWWWWWB/BWWWWWWWB/BWWWWWWWB/BWWWWWWWB/BWWWWWWWB #10',
      // MazeBacktracker
      ['RBP=GGR', 'GGR=RWW', 'P=R'],
      ['R=G #1'],
      ['R=W'],
      ['GWW=**G', 'GBW=*WG'],
      ['GBG=*W* #5'],
      ['G=W'],
      ['BBB/BWB=BBB/BBB'],
    ],
  }
}

export function maze2D(): Model {
  return {
    type: '2d',
    grid: grid2D({ size: [20, 20], start: [1, 1] }),
    rules: ['WBB=WAW'],
  }
}

export function maze3D(): Model {
  return {
    type: '3d',
    grid: grid3D({ size: [30, 30, 30], start: [1, 1, 1], char: 'U' }),
    rules: ['UBBBB=UAAAU', 'A=U'],
  }
}
