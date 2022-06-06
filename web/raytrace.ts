import * as THREE from 'three'

let camera: THREE.PerspectiveCamera
let scene: THREE.Scene
let renderer: THREE.WebGLRenderer
let mesh: THREE.InstancedMesh

const amount = parseInt(window.location.search.slice(1)) || 10
const count = Math.pow(amount, 3)

const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2(1, 1)

const color = new THREE.Color()
const white = new THREE.Color().setHex(0xffffff)

export function initRaytrace() {
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.set(amount, amount, amount)
  camera.lookAt(0, 0, 0)

  scene = new THREE.Scene()

  const light = new THREE.HemisphereLight(0xffffff, 0x888888)
  light.position.set(0, 1, 0)
  scene.add(light)

  const geometry = new THREE.IcosahedronGeometry(0.5, 3)
  const material = new THREE.MeshPhongMaterial({ color: 0xffffff })

  mesh = new THREE.InstancedMesh(geometry, material, count)

  let i = 0
  const offset = (amount - 1) / 2

  const matrix = new THREE.Matrix4()

  for (let x = 0; x < amount; x++) {
    for (let y = 0; y < amount; y++) {
      for (let z = 0; z < amount; z++) {
        matrix.setPosition(offset - x, offset - y, offset - z)

        mesh.setMatrixAt(i, matrix)
        mesh.setColorAt(i, color)

        i++
      }
    }
  }

  scene.add(mesh)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  window.addEventListener('resize', onWindowResize)
  document.addEventListener('mousemove', onMouseMove)

  animate()
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
}

function onMouseMove(event: MouseEvent) {
  event.preventDefault()

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
}

function animate() {
  requestAnimationFrame(animate)

  raycaster.setFromCamera(mouse, camera)

  const intersection = raycaster.intersectObject(mesh)

  if (intersection.length > 0) {
    const instanceId = intersection[0].instanceId

    mesh.getColorAt(instanceId!, color)

    if (color.equals(white)) {
      mesh.setColorAt(instanceId!, color.setHex(Math.random() * 0xffffff))

      mesh!.instanceColor!.needsUpdate = true
    }
  }

  render()
}

function render() {
  renderer.render(scene, camera)
}
