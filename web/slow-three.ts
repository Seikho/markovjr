import { useState } from 'react'
import { Model } from '../src'
import { slowGenerate } from '../src/generate'
import { updateInstanceGrid, Viewport } from './util'

export function useSlowThree(model: Model, viewport?: Viewport) {
  const [stopper, setStop] = useState({ stop: () => {} })

  const generate = (model: Model) => {
    if (!viewport) return
    stopper.stop()

    const nextStop = slowGenerate({ ...model, log: { frequency: 1 } }, 1, (next) => {
      updateInstanceGrid(next)
    })

    setStop(nextStop)
  }

  return { model, generate }
}
