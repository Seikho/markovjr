import THREE from 'three'
import { Color, Point3D } from '../src/types'
import { hexColor } from '../src/util'

const geometry = new THREE.BoxGeometry(20, 20, 20)

export function cube(point: Point3D, color: Color) {
  const obj = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: hexColor[color] }))
  obj.position.x = point.x
  obj.position.y = point.y
  obj.position.z = point.z

  obj.rotation.x = 0
  obj.rotation.y = 0
  obj.rotation.z = 0

  return obj
}
