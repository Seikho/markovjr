import { Model } from '../src'
import { generate, slowGenerate } from '../src/generate'

type Opts = {
  type: 'slow' | 'fast'
  model: Model
}

onmessage = ({ data: { model, type } }: MessageEvent<Opts>) => {
  if (type === 'slow') {
    slowGenerate(model, (model) => postMessage(model))
    return
  }

  const result = generate(model)
  postMessage(result)
}
