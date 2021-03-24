import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Button from '../Button'

const reactProps = {
  color: 'primary'
}

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Button {...reactProps}>My Button</Button>, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('matches snapshot as expected', () => {
  const renderTree = renderer.create(<Button {...reactProps}>My Button</Button>)
  expect(renderTree).toMatchSnapshot()
})
