import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { Model } from '../src'
import { instancedGrid, onWindowResize, setup, ViewControls } from './util'

export type GridView = ReturnType<typeof useThree>

export function useThree(name = 'maze') {
  const [load, model] = useModel(name)
  const [view, setView] = useState<ViewControls>()
  const [ready, setReady] = useState(false)
  const [grid, setGrid] = useState<THREE.InstancedMesh>()

  useEffect(load, [])

  useEffect(() => {
    if (!model) return
    console.log('Loading')

    const view = setup()
    setView(view)

    const amount = model.type === '2d' ? model.grid.input.length : model.grid.input[0].length
    view.camera.position.set(amount * 2, amount / 2, amount * 2)
    view.camera.lookAt(0, 0, 0)

    setGrid(instancedGrid(model, view.scene))

    const handler = onWindowResize(view)
    window.addEventListener('resize', handler)
    setReady(true)

    return () => window.removeEventListener('resize', handler)
  }, [model])

  return { view, ready, model, grid }
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
