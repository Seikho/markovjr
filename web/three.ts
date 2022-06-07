import { useEffect, useState } from 'react'
import { Model } from '../src'
import { Display, instancedGrid, onWindowResize, setup, ViewControls } from './util'

export type GridView = ReturnType<typeof useThree>

export function useThree(model: Model, borders = false) {
  const [load, result] = useModel(model)
  const [view, setView] = useState<ViewControls>()
  const [ready, setReady] = useState(false)
  const [display, setDisplay] = useState<Display>()

  useEffect(load, [])

  useEffect(() => {
    if (!result) return
    console.log('Loading')

    const view = setup()
    setView(view)

    const amount = model.type === '2d' ? model.grid.input.length : model.grid.input[0].length
    view.camera.position.set(amount * 2, amount / 2, amount * 2)
    view.camera.lookAt(0, 0, 0)

    setDisplay(instancedGrid(result, view.scene, borders))

    const handler = onWindowResize(view)
    window.addEventListener('resize', handler)
    setReady(true)

    return () => window.removeEventListener('resize', handler)
  }, [result])

  return { view, ready, model, display }
}

export function useModel(model: Model) {
  const worker = new Worker('dist/grids.js')
  const [result, setModel] = useState<Model>()

  worker.onmessage = (ev) => {
    setModel(ev.data)
    console.log(ev.data)
  }

  const load = () => worker.postMessage(model)
  return [load, result] as const
}
