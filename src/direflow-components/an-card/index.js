import { DireflowComponent } from 'direflow-component'
import Card from './Card'

export default DireflowComponent.create({
  component: Card,
  configuration: {
    tagname: 'an-card',
    useShadow: true
  },
  properties: {
    children: ''
  },
  plugins: [
    {
      name: 'styled-components'
    }
  ]
})
