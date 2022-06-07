import { useEffect, useState } from 'react'
import { Model } from '../src'
import { CubeGrid, cubeGrid, onWindowResize, setup, ViewControls } from './util'

export function useSlowThree(model: Model) {
  const [ready, setReady] = useState(false)
  const [view, setView] = useState<ViewControls>()
  const [grid, setGrid] = useState<CubeGrid>()

  useEffect(() => {
    const view = setup()
    setView(view)

    const amount = model.type === '2d' ? model.grid.input.length : model.grid.input[0].length
    view.camera.position.set(amount * 2, amount / 2, amount * 2)
    view.camera.lookAt(0, 0, 0)

    const grid = cubeGrid(model, view.scene)
    setGrid(grid)

    const handler = onWindowResize(view)
    window.addEventListener('resize', handler)
    setReady(true)

    return () => window.removeEventListener('resize', handler)
  }, [])

  return { view, model, grid, ready }
}

export function useModel(name: string) {
  const worker = new Worker('dist/grids.js')
  const [model, setModel] = useState<Model>()

  worker.onmessage = (ev) => {
    setModel(ev.data)
    console.log(ev.data)
  }

  const load = () => worker.postMessage(name)

  return [load, model] as const
}
