import { grid, pretty } from './helper.js'
import { generate } from './index.js'

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
  { freq: 5, print: true }
).then(pretty)
