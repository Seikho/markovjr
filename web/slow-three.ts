import { useState } from 'react'
import { Model, OnDone } from '../src'
import { slowGenerate } from '../src/generate'
import { updateInstanceGrid } from './util'

export function useSlowThree(model: Model, onDone?: OnDone) {
  const [stopper, setStop] = useState({ stop: () => {} })
  const [current, setCurrent] = useState(-1)

  const generate = (model: Model) => {
    stopper.stop()

    const nextStop = slowGenerate(
      model,
      (next) => {
        updateInstanceGrid(next)
        setCurrent(next.rule)
      },
      onDone
    )

    setStop(nextStop)
  }

  return { model, generate, stopper, current }
}
