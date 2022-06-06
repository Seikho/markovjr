import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { Model } from '../src'
import { iterate2D, iterate3D } from '../src/util'
import { cube } from './util'
import type { OrbitControls as Controls } from 'three/examples/jsm/controls/OrbitControls'
const { OrbitControls } = require('three/examples/jsm/controls/OrbitControls.js')

export type GridView = ReturnType<typeof useThree>

const mouse = new THREE.Vector2(1, 1)

export function useThree(name = 'maze') {
  const [load, model] = useModel(name)
  const [ready, setReady] = useState(false)
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer>()
  const [controls, setControls] = useState<Controls>()

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 5000)

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xffffff)
  const light = new THREE.HemisphereLight(0xffffff, 0x888888)
  light.position.set(0, 500, 2000)
  scene.add(light)

  const raycaster = new THREE.Raycaster()

  useEffect(load, [])

  useEffect(() => {
    if (!model) return

    console.log('Loading')
    const amount = model.type === '2d' ? model.grid.input.length : model.grid.input[0].length

    camera.position.set(amount * 2, amount / 2, amount * 2)
    camera.lookAt(0, 0, 0)

    applyMesh(scene, model)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth * 0.95, window.innerHeight * 0.95)
    setRenderer(renderer)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enableZoom = true
    controls.enablePan = true
    setControls(controls)

    document.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onWindowResize({ camera, renderer }))
    animate({ scene, light, camera, raycaster, renderer, ready, controls })
    setReady(true)
  }, [model])

  return { scene, light, camera, raycaster, renderer, ready, controls }
}

function applyMesh(scene: THREE.Scene, model: Model) {
  let i = 0

  if (model.type === '2d') {
    iterate2D(model, (x, y, color) => {
      scene.add(...cube(model, { x, y, z: 0 }, color))
      i++
    })
  }

  if (model.type === '3d') {
    iterate3D(model, (x, y, z, color) => {
      if (color !== 'B') scene.add(...cube(model, { x, y, z }, color))
      i++
    })
  }
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

export function onWindowResize(view: Pick<GridView, 'camera' | 'renderer'>) {
  return () => {
    view.camera.aspect = (window.innerWidth * 0.95) / (window.innerHeight * 0.95)
    view.camera.updateProjectionMatrix()
    view.renderer?.setSize(window.innerWidth * 0.95, window.innerHeight * 0.95)
  }
}

function animate(view: GridView) {
  requestAnimationFrame(() => animate(view))
  view.controls?.update()
  view.raycaster.setFromCamera(mouse, view.camera)
  render(view)
}

function render(view: GridView) {
  view.renderer?.render(view.scene, view.camera)
}

function onMouseMove(event: MouseEvent) {
  event.preventDefault()

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
}
