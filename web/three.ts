import { useEffect, useState } from 'react'
import { Model, OnDone, ValidModel } from '../src'
import { updateInstanceGrid } from './util'

export type GridView = ReturnType<typeof useThree>

const url = location.host.toLowerCase().includes('github.io') ? 'markovjr/grids.js' : 'dist/grids.js'

const worker = new Worker(url)

export function useThree(model: Model, onDone?: OnDone) {
  const [load, result] = useModel(model)

  const generate = (model: Model) => {
    load(model)
  }

  useEffect(() => {
    if (!result) return
    updateInstanceGrid(result)
    onDone?.(result)
  }, [result])

  return { model, generate }
}

export function useModel(initModel: Model) {
  const [result, setModel] = useState<ValidModel>()

  worker.onmessage = (ev) => {
    setModel(ev.data)
  }

  const load = (model?: Model) => worker.postMessage(model || initModel)
  return [load, result] as const
}
