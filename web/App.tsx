import './styles.css'
import React, { useEffect, useRef } from 'react'
import { maze2D } from '../src/models'
import { useSlowThree } from './slow-three'
import { useThree } from './three'
import { ModelForm } from './ModelForm'
import { instancedGrid, onWindowResize, setup, Viewport } from './util'

export const App: React.FC<{ borders?: boolean }> = ({ borders }) => {
  const model = maze2D()

  const [mode, setMode] = React.useState<'slow' | 'fast'>('slow')
  const [ready, setReady] = React.useState(true)
  const [viewport, setViewport] = React.useState<Viewport>()

  const ref = useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!ref.current) return

    const view = setup()

    const amount = model.type === '2d' ? model.grid.input.length : model.grid.input[0].length
    view.camera.position.set(amount * 2, amount / 2, amount * 2)
    view.camera.lookAt(0, 0, 0)

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

  useEffect(() => {
    if (!viewport) return
    if (!ref.current) return
    if (!ready) return
    if (!viewport.view.renderer) return

    const container = document.createElement('div')
    ref.current.appendChild(container)
    container.appendChild(viewport.view.renderer.domElement)
  }, [viewport, ref])

  return (
    <>
      <div className="viewport" id="viewport" ref={ref}></div>
      <ModelForm generate={render.generate} mode={setMode} />
    </>
  )
}
