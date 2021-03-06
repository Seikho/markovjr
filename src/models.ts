import { grid2D, grid3D } from './helper'
import { Model } from './types'

export function dungeon2D(): Model {
  return {
    type: '2d',
    grid: grid2D({ size: [50, 50] }),
    rules: [
      'B=P #1',
      'PBB=**P #ALL',
      // Rooms
      'BPBPBPBPB/BBBBBBBBB/BPBPBPBPB/BBBBBBBBB/BPBPBPBPB=BWWWWWWWB/BWWWWWWWB/BWWWWWWWB/BWWWWWWWB/BWWWWWWWB #10',
      // MazeBacktracker
      'RBP=GGR, GGR=RWW, P=R',
      'R=G #1',
      'R=W #ALL',
      'GWW=**G, GBW=*WG',
      'GBG=*W* #5',
      'G=W #ALL',
      'BBB/BWB=BBB/BBB',
    ],
  }
}

export function maze2D(): Model {
  return {
    type: '2d',
    grid: grid2D({ size: [20, 20] }),
    rules: ['B=W #1', 'WBB=WAW'],
  }
}

export function maze3D(): Model {
  return {
    type: '3d',
    grid: grid3D({ size: [40, 40, 40], start: [1, 1, 1], char: 'I' }),
    rules: ['IBBBB=IUUUI', 'I=U #ALL'],
  }
}

export function river(): Model {
  return {
    type: '2d',
    grid: grid2D({ size: [40, 40], char: 'B' }),
    rules: [
      'B=W #1',
      'B=R #1',
      'ONE RB=RR, WB=WW',
      'RW=UU',
      'W=B #ALL',
      'R=B #ALL',
      'UB=UU #1',
      'BU/UB=U*/** #ALL',
      'UB=*G',
      'B=E #13',
      'ONE EB=*E, GB=*G',
    ],
  }
}
