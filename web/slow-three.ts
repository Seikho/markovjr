import { useState } from 'react'
import { Model } from '../src'
import { slowGenerate } from '../src/generate'
import { instancedGrid, updateInstanceGrid, Viewport } from './util'

export function useSlowThree(model: Model, viewport?: Viewport) {
  const [stopper, setStop] = useState({ stop: () => {} })

  const generate = (model: Model) => {
    if (!viewport) return
    stopper.stop()

    instancedGrid(model, viewport.view.scene)
    const amount = model.type === '2d' ? model.grid.input.length : model.grid.input[0].length
    viewport.view.camera.position.set(amount * 2, amount / 2, amount * 2)
    viewport.view.camera.lookAt(0, 0, 0)

    const nextStop = slowGenerate({ ...model, log: { frequency: 1 } }, 1, (next) => {
      updateInstanceGrid(next)
    })

    setStop(nextStop)
  }

  return { model, generate }
}
