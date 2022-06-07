import React, { useEffect, useRef } from 'react'
import { maze3D } from '../src/models'
import { useSlowThree } from './slow-three'
import { useThree } from './three'

export const ThreeModel: React.FC<{ delay?: number }> = ({ delay }) => {
  const model = maze3D()

  const render = delay === undefined ? useThree(model) : useSlowThree({ ...model, log: { frequency: 1 } }, delay)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!render.view) return
    if (!ref.current) return
    if (!render.ready) return
    if (!render.view.renderer) return

    const container = document.createElement('div')
    ref.current.appendChild(container)
    container.appendChild(render.view.renderer.domElement)

    console.log('Ready')
  }, [render.view, ref])

  return <div id="viewport" ref={ref}></div>
}
