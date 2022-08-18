const MODELS = 'models'

export type SavedModels = {
  [name: string]: SavedModel
}

export type SavedModel = { width: number; height: number; rules: string[]; start: string }

let modelCache: SavedModels = {}

export function loadModels(): SavedModels {
  const json = localStorage.getItem(MODELS)
  if (!json) {
    modelCache = {}
    localStorage.setItem(MODELS, JSON.stringify(modelCache))
    return {}
  }

  modelCache = JSON.parse(json)
  return modelCache
}

export function saveModel(name: string, model: SavedModel) {
  modelCache[name] = model
  localStorage.setItem(MODELS, JSON.stringify(modelCache))
}

export function deleteModel(name: string) {
  delete modelCache[name]
  localStorage.setItem(MODELS, JSON.stringify(modelCache))
}
