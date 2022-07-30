import * as React from 'react'
import { Model } from '../src/types'
import { dungeon2D, maze2D, maze3D, river } from '../src/models'
import { grid2D } from '../src'
import { loadModels, SavedModels, saveModel } from './store'

type Mode = 'slow' | 'fast'

type Props = {
  generate: (model: Model) => void
  mode: Mode
  setMode: (mode: Mode) => void
}

export const ModelForm: React.FC<Props> = ({ generate, mode, setMode }) => {
  const [savedModels, setSavedModels] = React.useState<SavedModels>(loadModels())
  const [width, setWidth] = React.useState(64)
  const [height, setHeight] = React.useState(64)
  const [rules, setRules] = React.useState<Array<string>>([''])
  const [name, setName] = React.useState('')

  const savedNames = Object.keys(savedModels)

  const save = () => {
    saveModel(name, { width, height, rules })
    setSavedModels(loadModels())
  }

  const useExample = (model: Model) => {
    const rules = model.rules.map((rule) => (Array.isArray(rule) ? rule.join(', ') : rule))
    setRules(rules)
    callGenerate(model)
    setWidth(model.grid.input[0].length)
    setHeight(model.grid.input.length)
  }

  const useSavedModel = (name: string) => {
    const model = savedModels[name]

    setRules(model.rules)
    setWidth(model.width)
    setHeight(model.height)
    setName(name)

    callGenerate({
      type: '2d',
      grid: grid2D({ size: [model.width, model.height] }),
      rules: model.rules,
    })
  }

  const removeRule = (index: number) => {
    const next = rules.filter((_, i) => index !== i)
    setRules(next)
  }

  const insertRule = (index: number) => {
    const next = rules.slice(0, index).concat([''], rules.slice(index))
    console.log(next)
    setRules(next)
  }

  const updateRule = (index: number) => (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      rules: rules.filter((r) => !!r).map((rule) => (rule.includes(',') ? rule.split(',').map((r) => r.trim()) : rule)),
    }

    generate(model)
  }

  const canGen = width > 0 && height > 0 && rules.length > 0 && rules.some((rule) => rule.trim() !== '')

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
    <>
      <div className="form">
        <div className="dimensions">
          <div>
            <button onClick={() => useExample(river())}>River</button>
            <button onClick={() => useExample(dungeon2D())}>Dungeon 2D</button>
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
            <input className="dimension" type="text" value={width} onChange={setter(setWidth)} />
          </div>

          <div className="dim">
            <div className="label">H</div>
            <input className="dimension" type="text" value={height} onChange={setter(setHeight)} />
          </div>

          <div>
            <button disabled={!canGen} onClick={() => callGenerate()}>
              Generate
            </button>
          </div>
        </div>

        <div className="rules">
          <div>
            <div>
              Rules - Separate nested rules using commas. See console for colors{' '}
              <button onClick={() => setRules(rules.concat(['']))}>Add</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '4px' }}>
              Save Model
              <input type="text" value={name} onChange={(ev) => setName(ev.target.value)} />
              <button onClick={save}>Save</button>
            </div>
          </div>

          {rules.map((rule, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <button onClick={() => removeRule(i)}>-</button>
              <button onClick={() => insertRule(i)}>insert</button>
              <textarea className="rule" value={rule} onChange={updateRule(i)} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>Saved Models</div>
        {savedNames.map((name) => (
          <button key={name} onClick={() => useSavedModel(name)}>
            {name}
          </button>
        ))}
      </div>
    </>
  )
}
