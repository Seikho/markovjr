import * as THREE from 'three'

export type GridView = ReturnType<typeof useThree>

export function useThree() {
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.set(10, 10, 10)
  camera.lookAt(0, 0, 0)

  const scene = new THREE.Scene()
  const light = new THREE.AmbientLight(0xffffff, 0.8)
  light.position.set(0, 0, 0).normalize()
  scene.add(light)

  const raycaster = new THREE.Raycaster()
  const renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth * 0.95, window.innerHeight * 0.95)

  return { scene, light, camera, raycaster, renderer }
}

export function onWindowResize(view: GridView) {
  return () => {
    view.camera.aspect = window.innerWidth / window.innerHeight
    view.camera.updateProjectionMatrix()

    view.renderer.setSize(window.innerWidth, window.innerHeight)
  }
}

export function animate(view: GridView) {
  requestAnimationFrame(() => animate(view))
  render(view)
}

function render(view: GridView) {
  view.renderer.render(view.scene, view.camera)
  view.raycaster.setFromCamera({ x: 0, y: 0 }, view.camera)
}
