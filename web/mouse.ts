import * as THREE from 'three'

export const mouse = new THREE.Vector2(1, 1)

document.addEventListener('mousemove', onMouseMove)

function onMouseMove(event: MouseEvent) {
  event.preventDefault()

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
}
