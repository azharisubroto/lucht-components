import React from 'react'
import { Button } from '../component-exports'

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    color: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: ['primary', 'secondary']
      }
    },
    text: {
      control: {
        type: 'text'
      }
    }
  }
}

const Template = (args) => (
  <Button {...args}>
    <React.Fragment slot="content">My Button</React.Fragment>
  </Button>
)

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary'
}
