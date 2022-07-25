import './styles.css'
import React, { useEffect, useRef } from 'react'
import { maze2D } from '../src/models'
import { useSlowThree } from './slow-three'
import { useThree } from './three'
import { ModelForm } from './ModelForm'
import { getDisplay, instancedGrid, onWindowResize, setup, Viewport } from './util'
import { Model } from '../src/types'

export const App: React.FC<{ borders?: boolean }> = ({ borders }) => {
  const model = maze2D()

  const [mode, setMode] = React.useState<'slow' | 'fast'>('fast')
  const [ready, setReady] = React.useState(true)
  const [viewport, setViewport] = React.useState<Viewport>()

  const ref = useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!ref.current) return

    const view = setup()

    const display = instancedGrid(model, view.scene, borders)

    const handler = onWindowResize(view)
    window.addEventListener('resize', handler)
    setReady(true)

    const viewport: Viewport = { view, display }
    setViewport(viewport)
  }, [ref])

  const fast = useThree(model, viewport)
  const slow = useSlowThree({ ...model, log: { frequency: 1 } }, viewport)
  const render = mode === 'slow' ? slow : fast

  const setPosition = (_model: Model) => {
    const camera = viewport!.view.camera
    const { x, y, z } = getDisplay().cubes.position
    camera.position.set(x, y, z)
    camera.translateZ(100)
    viewport!.view.camera.updateProjectionMatrix()
  }

  const generate = (model: Model) => {
    instancedGrid(model, viewport!.view.scene)
    setPosition(model)
    render.generate(model)
  }

  useEffect(() => {
    if (!viewport) return
    if (!ref.current) return
    if (!ready) return
    if (!viewport.view.renderer) return

    const container = document.createElement('div')
    ref.current.appendChild(container)
    container.appendChild(viewport.view.renderer.domElement)
    generate(model)
  }, [viewport, ref])

  return (
    <>
      <div className="viewport" id="viewport" ref={ref}></div>
      <ModelForm generate={generate} mode={mode} setMode={setMode} />
    </>
  )
}
