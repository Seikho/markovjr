import './styles.css'
import React, { useEffect, useRef } from 'react'
import * as models from '../src/models'
import { useSlowThree } from './slow-three'
import { useThree } from './three'
import { ModelForm } from './ModelForm'
import { getView, instancedGrid, onWindowResize, setup, ViewControls } from './util'
import { Model } from '../src/types'

export const App: React.FC<{ borders?: boolean }> = ({ borders }) => {
  const baseModel = models.maze2D()

  const [mode, setMode] = React.useState<'slow' | 'fast'>('slow')
  const [ready, setReady] = React.useState(true)
  const [view, setView] = React.useState<ViewControls>()

  const ref = useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!ref.current) return

    const view = setup()
    instancedGrid(baseModel, borders)

    const handler = onWindowResize(view)
    window.addEventListener('resize', handler)
    setReady(true)

    view.camera.translateZ(75)
    setView(view)
  }, [ref])

  const fast = useThree(baseModel)
  const slow = useSlowThree(baseModel)
  const render = mode === 'slow' ? slow : fast

  const setPosition = (_model: Model) => {
    const camera = getView().camera
    camera.lookAt(0, 0, 0)
    camera.updateProjectionMatrix()
  }

  const generate = (model: Model) => {
    instancedGrid(model)
    setPosition(model)
    render.generate(model)
  }

  useEffect(() => {
    if (!view || !view.renderer) return
    if (!ref.current) return
    if (!ready) return

    const container = document.createElement('div')
    ref.current.appendChild(container)
    container.appendChild(view.renderer.domElement)
    generate(baseModel)
  }, [view, ref])

  return (
    <>
      <div className="viewport" id="viewport" ref={ref}></div>
      <ModelForm generate={generate} mode={mode} setMode={setMode} />
    </>
  )
}
