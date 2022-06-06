import React from 'react'
import { createRoot } from 'react-dom/client'
import { Viewport } from './Grid'

const App: React.FC = () => {
  return (
    <div>
      <Viewport />
    </div>
  )
}

const container = document.querySelector('#app')
const root = createRoot(container!)

root.render(<App />)
