import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThreeModel } from './ThreeModel'

const App: React.FC = () => {
  return (
    <div>
      <ThreeModel delay={undefined} />
    </div>
  )
}

const container = document.querySelector('#app')
const root = createRoot(container!)

root.render(<App />)
