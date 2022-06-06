import { grid2D, pretty } from './helper.js'
import { generate } from './index.js'

console.clear()

const result = generate({
  grid: grid2D({ start: [1, 1], size: [100, 40], char: 'P' }),
  rules: [
    'PBB=**P',
    'BPBPBPBPB/BBBBBBBBB/BPBPBPBPB/BBBBBBBBB/BPBPBPBPB=BWWWWWWWB/BWWWWWWWB/BWWWWWWWB/BWWWWWWWB/BWWWWWWWB #10',
    ['RBP=GGR', 'GGR=RWW', 'P=R'],
    ['R=G #1'],
    ['R=W'],
    ['GWW=**G', 'GBW=*WG'],
    ['GBG=*W* #5'],
    ['G=W'],
    ['BBB/BWB=BBB/BBB'],
  ],
  log: { frequency: 5 },
})

pretty(result)
