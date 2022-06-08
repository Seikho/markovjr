import * as React from 'react'
import { Model } from '../src/types'

export const ModelForm: React.FC<{ generate: (model: Model) => void }> = ({ generate }) => {
  const [depth, setDepth] = React.useState(1)
  const [width, setWidth] = React.useState(20)
  const [height, setHeight] = React.useState(20)

  return <div></div>
}
