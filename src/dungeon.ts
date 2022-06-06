import { grid2D, pretty } from './helper'
import { generate } from './generate'
import { Rule } from './types'

console.clear()

const result = generate({
  type: '2d',
  grid: grid2D({ start: [1, 1], size: [100, 60], char: 'P' }),
  rules: DungeonV1(),
  log: { frequency: 5 },
})

pretty(result)

function DungeonV1(): Rule[] {
  return [
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
  ]
}

function DungeonV2(): Rule[] {
  return [
    'PBB=**P',
    // Rooms
    'BPBPBPBPB/BBBBBBBBB/BPBPBPBPB/BBBBBBBBB/BPBPBPBPB=BWWWWWWWB/BWWWWWWWB/BWWWWWWWB/BWWWWWWWB/BWWWWWWWB #10',
    // MazeBacktracker
    ['RBPBPBP=GGGGGGR', 'GGGGGGR=RWWWWWW', 'P=R'],
    ['R=G #1'],
    ['R=W'],
    ['GWW=**G', 'GBW=*WG'],
    ['GBG=*W* #5'],
    ['G=W'],
    ['BBB/BWB=BBB/BBB'],
  ]
}

DungeonV1
DungeonV2
