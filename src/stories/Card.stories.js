import React from 'react'
import { Card } from '../component-exports'

export default {
  title: 'Component/Surface/Card',
  component: Card
}

const Template = (args) => <Card {...args}>My Button</Card>

export const Default = Template.bind({})

export const WithPadding = Template.bind({})
WithPadding.args = {
  padding: '30px 25px'
}
