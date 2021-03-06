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
    content: {
      control: {
        type: 'text'
      }
    }
  }
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  content: 'Primary Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  content: 'Secondary Button'
}
