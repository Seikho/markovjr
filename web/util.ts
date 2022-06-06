import * as THREE from 'three'
import { Vector3 } from 'three'
import { Color, Model, Point3D } from '../src/types'
import { hexColor } from '../src/util'

const SIZE = 1
const OPACITY = 0.9
let dimensions: Vector3

const geometry = new THREE.BoxGeometry(SIZE, SIZE, SIZE)
const material = new THREE.LineBasicMaterial({ color: 0x000000 })

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

  const obj = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: hexColor[color], opacity: OPACITY }))
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

  const edges = new THREE.EdgesGeometry(obj.geometry)
  const line = new THREE.LineSegments(edges, material)

  obj.add(line)

  return [obj]
}
