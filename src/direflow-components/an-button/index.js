import { DireflowComponent } from 'direflow-component'
import Button from './Button'

export default DireflowComponent.create({
  component: Button,
  configuration: {
    tagname: 'an-button',
    useShadow: true
  },
  properties: {
    color: 'primary',
    text: ''
  },
  plugins: [
    {
      name: 'styled-components'
    }
  ]
})
