import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Card from '../Card'

const reactProps = {
  color: 'primary'
}

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Card {...reactProps}>My Card</Card>, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('matches snapshot as expected', () => {
  const renderTree = renderer.create(<Card {...reactProps}>My Card</Card>)
  expect(renderTree).toMatchSnapshot()
})
