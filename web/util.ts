import * as THREE from 'three'
import { Vector3 } from 'three'
import type { OrbitControls as Controls } from 'three/examples/jsm/controls/OrbitControls'
import { Color, Model } from '../src/types'
import { hexColor, iterate2D, iterate3D } from '../src/util'
import { mouse } from './mouse'
const { OrbitControls } = require('three/examples/jsm/controls/OrbitControls.js')

const SIZE = 1
let dimensions: Vector3

export type Display = {
  scene: THREE.Scene
  cubes: THREE.InstancedMesh
  lines: THREE.LineSegments<THREE.InstancedBufferGeometry, THREE.LineBasicMaterial>
  borders: boolean
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
  B: new THREE.Color(hexColor.B),
  I: new THREE.Color(hexColor.I),
  P: new THREE.Color(hexColor.P),
  E: new THREE.Color(hexColor.E),
  N: new THREE.Color(hexColor.N),
  D: new THREE.Color(hexColor.D),
  A: new THREE.Color(hexColor.A),
  W: new THREE.Color(hexColor.W),
  R: new THREE.Color(hexColor.R),
  O: new THREE.Color(hexColor.O),
  Y: new THREE.Color(hexColor.Y),
  G: new THREE.Color(hexColor.G),
  U: new THREE.Color(hexColor.U),
  S: new THREE.Color(hexColor.S),
  K: new THREE.Color(hexColor.K),
  F: new THREE.Color(hexColor.F),
}

export function setup(): ViewControls {
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth * 0.95, window.innerHeight * 0.95)

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 5000)

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xe6e6e6)

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

  return all
}

export function instancedGrid(model: Model, scene: THREE.Scene, borders = false): Display {
  const { count } = getInstanceCount(model)
  const edges = new THREE.InstancedBufferGeometry().copy(new THREE.EdgesGeometry(geometry))
  const cubes = new THREE.InstancedMesh(geometry, cubeMaterial, count)
  const lines = new THREE.LineSegments(edges, lineMaterial)

  updateInstanceGrid(model, { cubes, lines, scene, borders })

  scene.add(cubes)

  return { cubes, lines, scene, borders }
}

export function updateInstanceGrid(model: Model, display: Display): Display {
  const { scene, cubes, borders } = display
  const { count, transparent } = getInstanceCount(model)
  let lines = display.lines

  if (borders) {
    scene.remove(display.lines)
  }

  cubes.count = count - transparent
  const positions: number[] = []

  let i = 0
  if (model.type === '2d') {
    iterate2D(model, (x, y, color) => {
      // if (color === 'B') return
      const pos = getPosition(model, x, y, 0)
      matrix.setPosition(pos.x, pos.y, pos.z)

      if (borders) positions.push(pos.x, pos.y, pos.z)

      cubes.setMatrixAt(i, matrix)
      cubes.setColorAt(i, threeColor[color])
      if (color !== 'B') i++
    })
  } else {
    iterate3D(model, (x, y, z, color) => {
      // if (color === 'B') return
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

  return { scene, cubes, lines, borders }
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
      dimensions = new THREE.Vector3(model.grid.input[0].length * SIZE, model.grid.input.length * SIZE, SIZE)
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
