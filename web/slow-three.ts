import { useEffect, useState } from 'react'
import { Model } from '../src'
import { slowGenerate } from '../src/generate'
import { Display, instancedGrid, onWindowResize, setup, updateInstanceGrid, ViewControls } from './util'

export function useSlowThree(model: Model, delay: number, borders = false) {
  const [ready, setReady] = useState(false)
  const [view, setView] = useState<ViewControls>()
  const [display, setDisplay] = useState<Display>()

  useEffect(() => {
    const view = setup()
    setView(view)

    const amount = model.type === '2d' ? model.grid.input.length : model.grid.input[0].length
    view.camera.position.set(amount * 2, amount / 2, amount * 2)
    view.camera.lookAt(0, 0, 0)

    const display = instancedGrid(model, view.scene, borders)
    setDisplay(display)

    const handler = onWindowResize(view)
    window.addEventListener('resize', handler)
    setReady(true)

    slowGenerate({ ...model, log: { frequency: 1 } }, delay, (next) => {
      setDisplay(updateInstanceGrid(next, display))
    })

    return () => window.removeEventListener('resize', handler)
  }, [])

  return { view, model, display, ready }
}
