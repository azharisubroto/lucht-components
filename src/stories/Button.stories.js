import React from 'react'
import { Button } from '../component-exports'

export default {
  title: 'Component/Inputs/Button',
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

const Template = (args) => <Button {...args}>My Button</Button>

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary'
}

export const CustomHeight = Template.bind({})
CustomHeight.args = {
  height: 70
}
