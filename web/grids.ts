import { generate, Model } from '../src'
import { dungeon2D, maze2D, maze3D } from '../src/models'

onmessage = (ev) => {
  console.log('Loading', ev.data)

  let model: Model
  switch (ev.data) {
    case 'maze':
      model = maze2D()
      break

    case 'dungeon':
      model = dungeon2D()
      break

    case 'maze3d':
    case 'maze3D':
      model = maze3D()
      break

    default:
      model = maze2D()
  }

  const result = generate(model)
  postMessage(result)
}
