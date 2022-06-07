import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { Model } from '../src'
import { CubeGrid, cubeGrid, onWindowResize, setup, ViewControls } from './util'

export type GridView = ReturnType<typeof useThree>

export function useThree(name = 'maze') {
  const [load, model] = useModel(name)
  const [view, setView] = useState<ViewControls>()
  const [ready, setReady] = useState(false)
  const [grid, setGrid] = useState<CubeGrid>()

  // const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 5000)

  // const scene = new THREE.Scene()
  // scene.background = new THREE.Color(0xffffff)
  // const light = new THREE.HemisphereLight(0xffffff, 0x888888)
  // light.position.set(0, 500, 2000)
  // scene.add(light)

  // const raycaster = new THREE.Raycaster()

  useEffect(load, [])

  useEffect(() => {
    if (!model) return
    console.log('Loading')

    const view = setup()
    setView(view)

    const amount = model.type === '2d' ? model.grid.input.length : model.grid.input[0].length
    view.camera.position.set(amount * 2, amount / 2, amount * 2)
    view.camera.lookAt(0, 0, 0)

    setGrid(applyMesh(model, view.scene))

    // const renderer = new THREE.WebGLRenderer({ antialias: true })
    // renderer.setPixelRatio(window.devicePixelRatio)
    // renderer.setSize(window.innerWidth * 0.95, window.innerHeight * 0.95)
    // setRenderer(renderer)

    // const controls = new OrbitControls(camera, renderer.domElement)
    // controls.enableDamping = true
    // controls.enableZoom = true
    // controls.enablePan = true
    // setControls(controls)
    // animate({ scene, light, camera, raycaster, renderer, ready, controls })

    const handler = onWindowResize(view)
    window.addEventListener('resize', handler)
    setReady(true)

    return () => window.removeEventListener('resize', handler)
  }, [model])

  return { view, ready, model, grid }
}

function applyMesh(model: Model, scene: THREE.Scene) {
  return cubeGrid(model, scene)
  // if (model.type === '2d') {
  //   iterate2D(model, (x, y, color) => {
  //     scene.add(cube(model, { x, y, z: 0 }, color))
  //   })
  // }

  // if (model.type === '3d') {
  //   iterate3D(model, (x, y, z, color) => {
  //     if (color !== 'B') scene.add(cube(model, { x, y, z }, color))
  //   })
  // }
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
