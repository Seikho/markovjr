import * as THREE from 'three'
import { Vector3 } from 'three'
import type { OrbitControls as Controls } from 'three/examples/jsm/controls/OrbitControls'
import { Color, Model, Point3D } from '../src/types'
import { hexColor, iterate2D, iterate3D } from '../src/util'
import { mouse } from './mouse'
const { OrbitControls } = require('three/examples/jsm/controls/OrbitControls.js')

const SIZE = 1
const OPACITY = 0.9
let dimensions: Vector3

const geometry = new THREE.BoxGeometry(SIZE, SIZE, SIZE)
const material = new THREE.LineBasicMaterial({ color: 0x000000 })

export type CubeGrid = Array<Array<THREE.Mesh[]>>

export type ViewControls = {
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  controls: Controls
  raycaster: THREE.Raycaster
}

export function setup(): ViewControls {
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth * 0.95, window.innerHeight * 0.95)

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 5000)

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xffffff)

  const light = new THREE.HemisphereLight(0xffffff, 0x888888)
  light.position.set(0, 500, 2000)

  scene.add(light)

  const raycaster = new THREE.Raycaster()

  const controls: Controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.enableZoom = true
  controls.enablePan = true

  const all = { scene, camera, raycaster, renderer, controls }
  animate(all)

  return all
}

export function cubeGrid(model: Model, scene: THREE.Scene): CubeGrid {
  if (model.type === '2d') {
    const grid: Array<THREE.Mesh[]> = []
    let row: THREE.Mesh[] = []
    let cy: number = 0
    iterate2D(model, (x, y, color) => {
      if (cy !== y) {
        grid.push(row)
        row = []
        cy = y
      }

      const next = cube(model, { x, y, z: 0 }, color)
      scene.add(next)
      row.push(next)
    })

    return [grid]
  }

  const grid: CubeGrid = []
  let zrow: Array<THREE.Mesh[]> = []
  let yrow: THREE.Mesh[] = []
  let cz = 0
  let cy = 0
  iterate3D(model, (x, y, z, color) => {
    if (cy !== y) {
      zrow.push(yrow)
      yrow = []
      cy = y
    }

    if (cz !== z) {
      grid.push(zrow)
      zrow = []
      cz = z
    }

    const next = cube(model, { x, y, z }, color)
    scene.add(next)
    yrow.push(next)
  })

  return grid
}

export function cube(model: Model, point: Point3D, color: Color) {
  if (!dimensions) {
    if (model.type === '2d') {
      dimensions = new THREE.Vector3(model.grid.input[0].length * SIZE, model.grid.input.length * SIZE, SIZE)
    } else {
      dimensions = new THREE.Vector3(
        model.grid.input[0][0].length * SIZE,
        model.grid.input[0].length * SIZE,
        model.grid.input.length * SIZE
      )
    }
  }

  const hex = hexColor[color]

  const obj = new THREE.Mesh(
    geometry,
    new THREE.MeshLambertMaterial({
      color: isNaN(hex) ? 0x000000 : hex,
      opacity: isNaN(hex) || color === 'B' ? 0 : OPACITY,
    })
  )

  obj.material.transparent = true

  obj.position.x = point.x * SIZE - dimensions.x / 2
  obj.position.y = point.y * SIZE - dimensions.y / 2
  obj.position.z = point.z * SIZE - dimensions.z / 2

  obj.rotation.x = 0
  obj.rotation.y = 0
  obj.rotation.z = 0

  obj.scale.x = 1
  obj.scale.y = 1
  obj.scale.z = 1

  if (color !== 'B') {
    const edges = new THREE.EdgesGeometry(obj.geometry)
    const line = new THREE.LineSegments(edges, material)
    obj.add(line)
  }

  return obj
}

export function onWindowResize(view: ViewControls) {
  return () => {
    view.camera.aspect = (window.innerWidth * 0.95) / (window.innerHeight * 0.95)
    view.camera.updateProjectionMatrix()
    view.renderer?.setSize(window.innerWidth * 0.95, window.innerHeight * 0.95)
  }
}

function animate(view: ViewControls) {
  requestAnimationFrame(() => animate(view))
  view.controls?.update()
  view.raycaster.setFromCamera(mouse, view.camera)
  render(view)
}

function render(view: ViewControls) {
  view.renderer?.render(view.scene, view.camera)
}
