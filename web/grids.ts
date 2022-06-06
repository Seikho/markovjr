import { dungeon2D } from '../src/models'

onmessage = () => {
  const dungeon = dungeon2D()
  postMessage(dungeon)
}
