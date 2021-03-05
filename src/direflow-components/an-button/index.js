import { DireflowComponent } from 'direflow-component'
import Button from './Button'

export default DireflowComponent.create({
  component: Button,
  configuration: {
    tagname: 'an-button',
    useShadow: false
  },
  properties: {
    color: 'primary',
    content: 'My Button'
  }
})
