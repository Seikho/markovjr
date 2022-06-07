# MarkovJR.js

> As seen on https://github.com/mxgmn/MarkovJunior

```sh
> yarn add markjovjr
```

## Installation

```sh
> npm install markovjr
> yarn add markovjr
```

## API

### Generate

The `generate` function applies the rule set to the grid

```ts
import { generate } from 'marjovjr'

function generate(model: Model): Model
```

### Model

Grids must be Cubes of Cuboids:

- All string lengths must be equal
- All array lengths across the Z-dimension must be equal

```ts
interface Model {
  type: '2d' | '3d'
  grid: string[] | Array<string[]>
  rules: Rule[]
  log?: { frequency: number }
}
```

Passing `log: { frequency }` will print out the current representation of the grid every `N`th application of a rule.

### Rules and Sequences

These are expressed `{FROM PATTERN}={TO PATTERN} #[COUNT]`

COUNT is optional
Examples sequences:

- `WBB=WAW` Will convert `WBB` to `WAW`
- `WBB=WAW #5` Will convert `WBB` to `WAW` a maximum for 5 times
- `BWB/BBB=WWW/WWW` Will scan for `BWB/BBB` where `BBB` is on the row below `BWB`

Rules can contain one or more sequences. Sequences are expressed as arrays.

- `*` is a wildcard
  - In a `FROM` pattern, it will match any character
  - In `TO` pattern, it will leave the character unchanged
- Any character that isn't a `Color` is treated as transparent
- `FROM` and `TO` patterns must be equal in length and
- Step characters (`/`) must occur in the same position in `FROM` and `TO` patterns

```ts
type Rule = string | string[]
type Color = 'B' | 'I' | 'P' | 'E' | 'N' | 'D' | 'A' | 'W' | 'R' | 'O' | 'Y' | 'G' | 'U' | 'S' | 'K' | 'F'

const model: Model2D = {
  type: '2d',
  // Grids are strings of Colors
  grid: ['BWBBBB', 'BBBBBB', 'BBBBBB', 'BBBBBB', 'BBBBBB', 'BBBBBB'],
  rules: ['WBB=WAW', ['A=W', 'B=R']],
}
```

### Utility Functions

```ts
type Coord2D = [number, number]
type Coord3D = [number, number, number]
```

- `grid2D({ size: Coord2D, start: Coord2D, char?: string })`
  - Generate black 2D grids with a single `W` character at the `start` coordinate
- `grid3D({ size: Coord3D, start: Coord3D, char?: string })`
  - Generate black 3D grids with a single `W` character at the `start` coordinate

### License

MIT
