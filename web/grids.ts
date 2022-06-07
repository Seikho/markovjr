import { generate } from '../src'

onmessage = (ev) => {
  const result = generate(ev.data)
  postMessage(result)
}
