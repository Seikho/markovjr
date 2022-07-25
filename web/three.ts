import { useEffect, useState } from 'react'
import { Model } from '../src'
import { updateInstanceGrid, Viewport } from './util'

export type GridView = ReturnType<typeof useThree>

export function useThree(model: Model, viewport?: Viewport) {
  const [load, result] = useModel(model)

  const generate = (model: Model) => {
    if (!viewport) return
    load(model)
  }

  useEffect(() => {
    if (!result || !viewport) return

    updateInstanceGrid(result)
  }, [result])

  return { model, generate }
}

export function useModel(initModel: Model) {
  const url = location.host.toLowerCase().includes('github.io') ? 'markovjr/grids.js' : 'dist/grids.js'
  const worker = new Worker(url)
  const [result, setModel] = useState<Model>()

  worker.onmessage = (ev) => {
    setModel(ev.data)
  }

  const load = (model?: Model) => worker.postMessage(model || initModel)
  return [load, result] as const
}
