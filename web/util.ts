import * as THREE from 'three'
import { Vector3 } from 'three'
import type { OrbitControls as Controls } from 'three/examples/jsm/controls/OrbitControls'
import { Color, Model } from '../src/types'
import { hexColor, iterate2D, iterate3D } from '../src/util'
import { mouse } from './mouse'
const { OrbitControls } = require('three/examples/jsm/controls/OrbitControls.js')

const SIZE = 1
let dimensions: Vector3

export type Viewport = {
  view: ViewControls
  display: Display
}

export type Display = {
  scene: THREE.Scene
  cubes: THREE.InstancedMesh
  lines: THREE.LineSegments<THREE.InstancedBufferGeometry, THREE.LineBasicMaterial>
  borders: boolean
}

let VIEW: ViewControls
let DISPLAY: Display

export function getDisplay() {
  return { ...DISPLAY }
}

export function getView() {
  return { ...VIEW }
}

const geometry = new THREE.BoxGeometry(SIZE, SIZE, SIZE)
const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff })

const lineMaterial = new THREE.LineBasicMaterial({
  color: 0x000000,
  onBeforeCompile: (shader: any) => {
    shader.vertexShader = `
    attribute vec3 offset;
    ${shader.vertexShader}
  `.replace(
      `#include <begin_vertex>`,
      `
    #include <begin_vertex>
    transformed += offset;
    `
    )
  },
} as any)

const matrix = new THREE.Matrix4()

export type CubeGrid = Array<Array<THREE.Mesh[]>>

export type ViewControls = {
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  controls: Controls
  raycaster: THREE.Raycaster
}

const threeColor: { [char in Color]: THREE.Color } = {
  A: new THREE.Color(hexColor.A),
  B: new THREE.Color(hexColor.B),
  C: new THREE.Color(hexColor.C),
  D: new THREE.Color(hexColor.D),
  E: new THREE.Color(hexColor.E),
  F: new THREE.Color(hexColor.F),
  G: new THREE.Color(hexColor.G),
  H: new THREE.Color(hexColor.H),
  I: new THREE.Color(hexColor.I),
  J: new THREE.Color(hexColor.J),
  K: new THREE.Color(hexColor.K),
  L: new THREE.Color(hexColor.L),
  M: new THREE.Color(hexColor.M),
  N: new THREE.Color(hexColor.N),
  O: new THREE.Color(hexColor.O),
  P: new THREE.Color(hexColor.P),
  Q: new THREE.Color(hexColor.Q),
  R: new THREE.Color(hexColor.R),
  S: new THREE.Color(hexColor.S),
  T: new THREE.Color(hexColor.T),
  U: new THREE.Color(hexColor.U),
  V: new THREE.Color(hexColor.V),
  W: new THREE.Color(hexColor.W),
  X: new THREE.Color(hexColor.X),
  Y: new THREE.Color(hexColor.Y),
  Z: new THREE.Color(hexColor.Z),
}

export function setup(): ViewControls {
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)

  const { width, height } = getViewportSize()
  renderer.setSize(width, height)

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 5000)
  camera.aspect = width / height

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xa6a6a6)

  const light = new THREE.HemisphereLight(0xffffff, 0x888888, 1)
  light.position.set(0, 500, 2000)

  scene.add(light)

  const raycaster = new THREE.Raycaster()

  const controls: Controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.enableZoom = true
  controls.enablePan = true

  const all = { scene, camera, raycaster, renderer, controls }
  animate(all)

  VIEW = all
  return all
}

export function instancedGrid(model: Model, borders = false): Display {
  if (DISPLAY) {
    DISPLAY.scene.remove(DISPLAY.cubes)
  }

  const { count } = getInstanceCount(model)
  const edges = new THREE.InstancedBufferGeometry().copy(new THREE.EdgesGeometry(geometry))
  const cubes = new THREE.InstancedMesh(geometry, cubeMaterial, count)
  const lines = new THREE.LineSegments(edges, lineMaterial)

  cubes.position.set(0, 0, 0)

  DISPLAY = { cubes, lines, scene: VIEW.scene, borders }
  updateInstanceGrid(model)

  DISPLAY.scene.add(cubes)

  return DISPLAY
}

export function updateInstanceGrid(model: Model): Display {
  const { scene, cubes, borders } = DISPLAY
  const { count, transparent } = getInstanceCount(model)

  let lines = DISPLAY.lines

  if (borders) {
    scene.remove(DISPLAY.lines)
  }

  cubes.count = count - transparent
  const positions: number[] = []

  let i = 0
  if (model.type === '2d') {
    iterate2D(model, (x, y, color) => {
      const pos = getPosition(model, x, y, 0)
      matrix.setPosition(pos.x, pos.y, pos.z)

      if (borders) positions.push(pos.x, pos.y, pos.z)

      cubes.setMatrixAt(i, matrix)
      cubes.setColorAt(i, threeColor[color])
      if (color !== 'B') i++
    })
  } else {
    iterate3D(model, (x, y, z, color) => {
      const pos = getPosition(model, x, y, z)
      matrix.setPosition(pos.x, pos.y, pos.z)

      if (borders) positions.push(pos.x, pos.y, pos.z)

      cubes.setMatrixAt(i, matrix)
      cubes.setColorAt(i, threeColor[color])
      if (color !== 'B') i++
    })
  }

  if (cubes.instanceColor) cubes.instanceColor!.needsUpdate = true
  cubes.instanceMatrix.needsUpdate = true

  if (borders) {
    const edges = new THREE.InstancedBufferGeometry().copy(new THREE.EdgesGeometry(geometry))
    edges.setAttribute('offset', new THREE.InstancedBufferAttribute(new Float32Array(positions), 3))
    edges.instanceCount = Infinity
    lines = new THREE.LineSegments(edges, lineMaterial)
    scene.add(lines)
  }

  DISPLAY = { scene, cubes, lines, borders }
  return DISPLAY
}

function getInstanceCount(model: Model) {
  const count =
    model.type === '3d'
      ? model.grid.input.length * model.grid.input[0].length * model.grid.input[0][0].length
      : model.grid.input.length * model.grid.input[0].length

  let transparent = 0

  if (model.type === '2d') {
    iterate2D(model, (_, __, color) => {
      if (color === 'B') transparent++
    })
  } else {
    iterate3D(model, (_, __, ___, color) => {
      if (color === 'B') transparent++
    })
  }
  return { count, transparent }
}

function getPosition(model: Model, x: number, y: number, z: number) {
  if (!dimensions) {
    if (model.type === '2d') {
      dimensions = new THREE.Vector3(
        model.grid.input[0].length * SIZE,
        model.grid.input.length * SIZE,
        SIZE
      )
    } else {
      dimensions = new THREE.Vector3(
        model.grid.input[0][0].length * SIZE,
        model.grid.input[0].length * SIZE,
        model.grid.input.length * SIZE
      )
    }
  }

  return {
    x: x * SIZE - dimensions.x / 2,
    y: y * SIZE - dimensions.y / 2,
    z: z * SIZE - dimensions.z / 2,
  }
}

export function onWindowResize(view: ViewControls) {
  return () => {
    const { width, height } = getViewportSize()
    view.camera.aspect = width / height
    view.camera.updateProjectionMatrix()
    view.renderer?.setSize(width, height)
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

function getViewportSize() {
  const ele = document.querySelector('#viewport')!

  const width = ele.clientWidth
  const height = ele.clientHeight

  return { width, height }
}

export function getModelSize(model: Model) {
  const w = model.grid.input[0].length
  const h = model.grid.input.length
  const d = model.type === '3d' ? model.grid.input[0][0].length : 1

  return { w, h, d }
}
