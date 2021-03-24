import { DireflowComponent } from 'direflow-component'
import Card from './Card'

export default DireflowComponent.create({
  component: Card,
  configuration: {
    tagname: 'an-card',
    useShadow: true
  },
  properties: {
    padding: '20px'
  },
  plugins: [
    {
      name: 'styled-components'
    }
  ]
})
