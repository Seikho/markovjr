import * as React from 'react'
import { Model } from '../src/types'
import { dungeon2D, maze2D, maze3D, river } from '../src/models'
import { grid2D } from '../src'
import { deleteModel, loadModels, SavedModels, saveModel } from './store'
import { webColors } from '../src/util'
import { processSequences } from '../src/generate'

type Mode = 'slow' | 'fast'

type Props = {
  initialModel: Model
  generate: (model: Model) => void
  mode: Mode
  setMode: (mode: Mode) => void
  current: number
  outcome: string
}

type FormModel = {
  type: '2d'
  grid: [number, number]
  rules: string[]
}

export const ModelForm: React.FC<Props> = ({ generate, mode, setMode, current, initialModel, outcome }) => {
  const [savedModels, setSavedModels] = React.useState<SavedModels>(loadModels())
  const [width, setWidth] = React.useState(initialModel.grid.input[0].length)
  const [height, setHeight] = React.useState(initialModel.grid.input.length)
  const [rules, setRules] = React.useState<string[]>(initialModel.rules)
  const [name, setName] = React.useState('')
  const [selected, setSelected] = React.useState(-1)
  const [heights, setHeights] = React.useState(rules.map(() => 20))

  const setTextareaHeight = (index: number, newHeight: number, styleHeight: string) => {
    setHeights(
      heights.map((h, i) => {
        if (index !== i) return h
        const realHeight = Number(styleHeight.replace('px', '').trim())
        if (realHeight < newHeight && newHeight - realHeight >= 5) return newHeight
        if (newHeight - h < 5) return h
        return newHeight
      })
    )
  }

  React.useEffect(() => {
    if (heights.length === rules.length) return
    setHeights(rules.map((_, i) => heights[i] || 20))
  }, [rules])

  const selectedRules = rules[selected]

  const savedNames = Object.keys(savedModels)

  const save = () => {
    saveModel(name, { width, height, rules })
    setSavedModels(loadModels())
  }

  const remove = () => {
    deleteModel(name)
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
    setRules(next)
  }

  const updateRule = (index: number) => (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaHeight(index, ev.target.scrollHeight, ev.target.style.height)
    const next = rules.map((rule, i) => {
      if (index !== i) return rule
      return ev.target.value
    })

    setRules(next)
  }

  const sanitiseInputs = () => {
    const model: Model = {
      type: '2d',
      grid: grid2D({ size: [width, height] }),
      rules: rules.filter((r) => !!r).filter((r) => r.split('=')[0] !== r.split('=')[1]),
    }

    return model
  }

  const toFormModel = (): FormModel => {
    return {
      type: '2d',
      grid: [width, height],
      rules: rules.filter((r) => !!r).filter((r) => r.split('=')[0] !== r.split('=')[1]),
    }
  }

  const callGenerate = (existing?: Model) => {
    if (existing) return generate(existing)

    const model = sanitiseInputs()

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

          <div>
            <div>Saved Model</div>
            {savedNames.map((name) => (
              <button key={name} onClick={() => useSavedModel(name)}>
                {name}
              </button>
            ))}
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
              <button onClick={remove}>Delete Model</button>
            </div>
          </div>

          {rules.map((rule, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <button onClick={() => removeRule(i)}>-</button>
              <button onClick={() => insertRule(i)}>insert</button>
              <textarea
                className={`rule ${current === i ? 'current' : ''}`}
                style={{ height: heights[i] }}
                value={rule}
                onChange={updateRule(i)}
                onFocus={(ev) => {
                  setSelected(i)
                  setTextareaHeight(i, ev.target.scrollHeight, ev.target.style.height)
                }}
              />
            </div>
          ))}
          <SequenceColors rules={selectedRules} />
          <Output
            model={toFormModel()}
            outcome={outcome}
            onImport={(json) => {
              const model = JSON.parse(json)
              setWidth(model.grid[0])
              setHeight(model.grid[1])
              setRules(model.rules)
            }}
          />
        </div>
      </div>
    </>
  )
}

const Output: React.FC<{ model: FormModel; outcome: string; onImport: (mode: string) => void }> = ({
  model,
  onImport,
  outcome,
}) => {
  const json = JSON.stringify(
    { type: model.type, rules: model.rules, grid: [model.grid[0] ?? 0, model.grid[1] ?? 0] },
    null,
    2
  )
  const [imp, setImport] = React.useState('')

  return (
    <div>
      <div>
        <button onClick={() => onImport(imp)}>Import</button>
        <input defaultValue="" onChange={(ev) => setImport(ev.target.value)} />
      </div>

      <div>
        <pre>{json}</pre>
      </div>

      <textarea value={outcome} style={{ minHeight: '60px', width: '100%', marginBottom: '60px' }} />
    </div>
  )
}

const SequenceColors: React.FC<{ rules: string }> = ({ rules }) => {
  if (!rules) return null

  const { sequences, unions } = processSequences([rules], false)
  const [sequence] = sequences

  const entries = Object.entries(unions)
  if (!sequence && !entries.length) return null

  if (entries.length) {
    const [symbol, union] = entries[0]
    return (
      <>
        <CharColors from={symbol} to={Array.from(union.keys()).join('')} />
      </>
    )
  }

  return (
    <>
      {sequence.rules.map(({ from, to }, i) => (
        <CharColors key={i} from={from} to={to} />
      ))}
    </>
  )
}

const CharColors: React.FC<{ from: string; to: string }> = ({ from, to }) => {
  const froms = from.split('/')
  const tos = to.split('/')

  return (
    <div className="color-grid">
      <div className="color-rows">
        {froms.map((chars, i) => (
          <ColorRow key={i} chars={chars} />
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <code>=&gt;</code>
      </div>
      <div className="color-rows">
        {tos.map((chars, i) => (
          <ColorRow key={i} chars={chars} />
        ))}
      </div>
    </div>
  )
}

const ColorRow: React.FC<{ chars: string }> = ({ chars }) => {
  return (
    <div className="color-row">
      {chars.split('').map((char, i) => {
        const color = webColors[char]
        if (!color)
          return (
            <span key={i} className="square">
              {char}
            </span>
          )

        return <span key={i} className="square" style={{ backgroundColor: color, border: '1px solid black' }}></span>
      })}
    </div>
  )
}
