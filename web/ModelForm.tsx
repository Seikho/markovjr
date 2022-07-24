import * as React from 'react'
import { Model } from '../src/types'
import { dungeon2D, maze2D, maze3D, river } from '../src/models'
import { grid2D } from '../src'

export const ModelForm: React.FC<{ generate: (model: Model) => void; mode: (next: 'slow' | 'fast') => void }> = ({
  generate,
  mode,
}) => {
  React.useEffect(() => mode('slow'), [])

  const [width, setWidth] = React.useState(64)
  const [height, setHeight] = React.useState(64)
  const [slow, setSlow] = React.useState(true)

  const model: Model = {
    type: '2d',
    grid: grid2D({ size: [width, height] }),
    rules: [],
  }

  const canGen = width > 0 && height > 0 && model.rules.length > 0

  const setter = (func: (val: number) => void) => {
    const handler = (ev: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(ev.target.value)
      if (!ev.target.value) return func(0)
      if (isNaN(value)) return func(0)

      func(value)
    }

    return handler
  }

  React.useEffect(() => {
    mode(slow ? 'slow' : 'fast')
  }, [slow])

  return (
    <div className="form">
      <div className="dimensions">
        <div>
          <button onClick={() => generate(river())}>River</button>
          <button onClick={() => generate(dungeon2D())}>Dungeon 2D</button>
          <button onClick={() => generate(maze2D())}>Maze 2D</button>
          <button onClick={() => generate(maze3D())}>Maze 3D</button>
        </div>

        <div className="dim">
          <div className="label">Slow?</div>
          <input type="checkbox" defaultChecked={slow} onChange={(ev) => setSlow(ev.target.checked)} />
        </div>

        <div className="dim">
          <div className="label">W</div>
          <input className="dimension" type="text" defaultValue={width} onChange={setter(setWidth)} />
        </div>

        <div className="dim">
          <div className="label">H</div>
          <input className="dimension" type="text" defaultValue={height} onChange={setter(setHeight)} />
        </div>

        <div>
          <button disabled={!canGen}>Generate</button>
        </div>
      </div>
    </div>
  )
}
