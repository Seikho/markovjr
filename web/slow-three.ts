import { useState } from 'react'
import { Model } from '../src'
import { slowGenerate } from '../src/generate'
import { updateInstanceGrid } from './util'

export function useSlowThree(model: Model, onDone?: Function) {
  const [stopper, setStop] = useState({ stop: () => {} })

  const generate = (model: Model) => {
    stopper.stop()

    const nextStop = slowGenerate(
      { ...model, log: { frequency: 1 } },
      1,
      (next) => {
        updateInstanceGrid(next)
      },
      onDone
    )

    setStop(nextStop)
  }

  return { model, generate, stopper }
}
