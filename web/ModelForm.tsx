import * as React from 'react'
import { Model } from '../src/types'
import { dungeon2D, maze2D, maze3D, river, dungeon2DV2 } from '../src/models'
import { grid2D } from '../src'

type Mode = 'slow' | 'fast'

type Props = {
  generate: (model: Model) => void
  mode: Mode
  setMode: (mode: Mode) => void
}

export const ModelForm: React.FC<Props> = ({ generate, mode, setMode }) => {
  const [x, setX] = React.useState(1)
  const [y, setY] = React.useState(1)
  const [char, setChar] = React.useState('W')
  const [width, setWidth] = React.useState(64)
  const [height, setHeight] = React.useState(64)
  const [rules, setRules] = React.useState<Array<string>>([''])

  const useExample = (model: Model) => {
    const rules = model.rules.map((rule) => (Array.isArray(rule) ? rule.join(', ') : rule))
    setRules(rules)
    callGenerate(model)
  }

  const removeRule = (index: number) => {
    const next = rules.filter((_, i) => index !== i)
    setRules(next)
  }

  const updateRule = (index: number) => (ev: React.ChangeEvent<HTMLInputElement>) => {
    const next = rules.map((rule, i) => {
      if (index !== i) return rule
      return ev.target.value
    })

    setRules(next)
  }

  const callGenerate = (existing?: Model) => {
    if (existing) return generate(existing)

    const model: Model = {
      type: '2d',
      grid: grid2D({ size: [width, height] }),
      rules: rules.map((rule) => (rule.includes(',') ? rule.split(',').map((r) => r.trim()) : rule)),
    }

    generate(model)
  }

  const canGen =
    width > 0 && height > 0 && rules.length > 0 && rules.every((rule) => rule.trim() !== '') && x < width && y < height

  const setter = (func: (val: number) => void) => {
    const handler = (ev: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(ev.target.value)
      if (!ev.target.value) return func(0)
      if (isNaN(value)) return func(0)

      func(value)
    }

    return handler
  }

  return (
    <div className="form">
      <div className="dimensions">
        <div>
          <button onClick={() => useExample(river())}>River</button>
          <button onClick={() => useExample(dungeon2D())}>Dungeon 2D</button>
          <button onClick={() => useExample(dungeon2DV2())}>Dungeon 2D V2</button>
          <button onClick={() => useExample(maze2D())}>Maze 2D</button>
          <button onClick={() => useExample(maze3D())}>Maze 3D</button>
        </div>

        <div className="dim">
          <div className="label">Slow?</div>
          <input
            type="checkbox"
            defaultChecked={mode === 'slow'}
            onChange={(ev) => setMode(ev.target.checked ? 'slow' : 'fast')}
          />
        </div>

        <div className="dim">
          <div className="label">W</div>
          <input className="dimension" type="text" defaultValue={width} onChange={setter(setWidth)} />
        </div>

        <div className="dim">
          <div className="label">H</div>
          <input className="dimension" type="text" defaultValue={height} onChange={setter(setHeight)} />
        </div>

        <div className="dim">
          <div>
            <div>Start Color, X, Y:</div>
            <div>Place a COLOR at X,Y instead of a blank</div>
            <div>Set COLOR to empty to leave it blank</div>
          </div>
        </div>

        <div className="dim">
          <div className="label">Color</div>
          <input className="dimension" type="text" defaultValue={char} onChange={(e) => setChar(e.target.value)} />
        </div>

        <div className="dim">
          <div className="label">X,Y</div>
          <input className="dimension" type="text" defaultValue={x} onChange={setter(setX)} />
          <input className="dimension" type="text" defaultValue={y} onChange={setter(setY)} />
        </div>

        <div>
          <button disabled={!canGen} onClick={() => callGenerate()}>
            Generate
          </button>
        </div>
      </div>

      <div className="rules">
        <div>
          Rules - Separate nested rules using commas. See console for colors{' '}
          <button onClick={() => setRules(rules.concat(['']))}>Add</button>
        </div>

        {rules.map((rule, i) => (
          <div key={i}>
            <button onClick={() => removeRule(i)}>-</button>
            <input className="rule" type="text" defaultValue={rule} onChange={updateRule(i)} />
          </div>
        ))}
      </div>
    </div>
  )
}
