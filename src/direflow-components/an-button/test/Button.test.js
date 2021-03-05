import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Button from '../Button'

const reactProps = {
  content: 'Button Text',
  color: 'primary'
}

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Button {...reactProps} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('matches snapshot as expected', () => {
  const renderTree = renderer.create(<Button {...reactProps} />)
  expect(renderTree).toMatchSnapshot()
})
