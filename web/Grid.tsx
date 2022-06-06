import React, { useEffect, useRef } from 'react'
import { useThree } from './three'

export const Viewport: React.FC = () => {
  const view = useThree('maze3d')
  const ref = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   initRaytrace()
  // }, [])

  useEffect(() => {
    if (!ref.current) return
    if (!view.ready) return
    if (!view.renderer) return

    const container = document.createElement('div')
    ref.current.appendChild(container)
    container.appendChild(view.renderer.domElement)

    console.log('Ready')
  }, [view, ref])

  return <div id="viewport" ref={ref}></div>
}