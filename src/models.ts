import { grid2D } from './helper'
import { Model } from './types'

export function dungeon2D(): Model {
  return {
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
