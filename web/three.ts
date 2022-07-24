import { useEffect, useState } from 'react'
import { Model } from '../src'
import { instancedGrid, updateInstanceGrid, Viewport } from './util'

export type GridView = ReturnType<typeof useThree>

export function useThree(model: Model, viewport?: Viewport) {
  const [load, result] = useModel(model)

  const generate = (model: Model) => {
    if (!viewport) return

    instancedGrid(model, viewport.view.scene)
    const amount = model.type === '2d' ? model.grid.input.length : model.grid.input[0].length
    viewport.view.camera.position.set(amount * 2, amount / 2, amount * 2)
    viewport.view.camera.lookAt(0, 0, 0)
    load(model)
  }

  useEffect(() => {
    if (!result || !viewport) return

    updateInstanceGrid(result)
  }, [result])

  return { model, generate }
}

export function useModel(initModel: Model) {
  const worker = new Worker('dist/grids.js')
  const [result, setModel] = useState<Model>()

  worker.onmessage = (ev) => {
    setModel(ev.data)
  }

  const load = (model?: Model) => worker.postMessage(model || initModel)
  return [load, result] as const
}
