import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Model } from '../src/types'
import { animate, onWindowResize, useThree } from './three'

const App: React.FC = () => {
  return (
    <div>
      <Viewport />
    </div>
  )
}

const Viewport: React.FC = () => {
  const view = useThree()
  const ref = useRef<HTMLDivElement>(null)
  const generator = new Worker('dist/grids.js')

  const [dungeon, setDungeon] = useState<Model>()

  generator.onmessage = (ev) => {
    setDungeon(ev.data)
  }

  useEffect(() => {
    if (dungeon) console.log(dungeon)
  }, [dungeon])

  useEffect(() => {
    if (!ref.current) return

    generator.postMessage('start')

    const handler = onWindowResize(view)
    const container = document.createElement('div')

    ref.current?.appendChild(container)
    container.appendChild(view.renderer.domElement)

    document.addEventListener('resize', handler)
    animate(view)

    return () => {
      document.removeEventListener('resize', handler)
    }
  }, [ref])

  return <div id="viewport" ref={ref}></div>
}

const container = document.querySelector('#app')
const root = createRoot(container!)

root.render(<App />)
