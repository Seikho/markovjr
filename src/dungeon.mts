import { grid, pretty } from './helper.mjs'
import { generate } from './index.mjs'

console.clear()

generate(
  grid({ start: [1, 1], size: [60, 40], char: 'P' }),
  [
    'PBB=**P',
    'BPBPBPBPB/BBBBBBBBB/BPBPBPBPB/BBBBBBBBB/BPBPBPBPB=BWWWWWWWB/BWWWWWWWB/BWWWWWWWB/BWWWWWWWB/BWWWWWWWB #15',
    ['RBP=GGR', 'GGR=RWW', 'P=R'],
    ['R=G #1'],
    ['R=W'],
    ['GWW=**G', 'GBW=*WG'],
    ['GBG=*W* #5'],
    ['G=W'],
    ['BBB/BWB=BBB/BBB'],
  ],
  { freq: 1, print: true }
).then(pretty)
