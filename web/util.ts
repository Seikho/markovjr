import * as THREE from 'three'
import { Color, Point3D } from '../src/types'
import { hexColor } from '../src/util'

const SIZE = 1
const geometry = new THREE.BoxGeometry(SIZE, SIZE, SIZE)

export function cube(point: Point3D, color: Color) {
  const obj = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: hexColor[color] }))
  obj.position.x = point.x * SIZE
  obj.position.y = point.y * SIZE
  obj.position.z = point.z * SIZE

  obj.rotation.x = 0
  obj.rotation.y = 0
  obj.rotation.z = 0

  obj.scale.x = 1
  obj.scale.y = 1
  obj.scale.z = 1

  return obj
}
