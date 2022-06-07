import React, { useEffect, useRef } from 'react'
import { maze3D } from '../src/models'
import { useSlowThree } from './slow-three'
// import { useThree } from './three'

export const ThreeModel: React.FC = () => {
  // const { view, ready } = useThree('maze3d')
  const { view, ready } = useSlowThree(maze3D())
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!view) return
    if (!ref.current) return
    if (!ready) return
    if (!view.renderer) return

    const container = document.createElement('div')
    ref.current.appendChild(container)
    container.appendChild(view.renderer.domElement)

    console.log('Ready')
  }, [view, ref])

  return <div id="viewport" ref={ref}></div>
}
