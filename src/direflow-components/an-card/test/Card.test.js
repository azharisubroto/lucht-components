import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Card from '../Card'

const reactProps = {
  children: 'Card Text'
}

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Card {...reactProps} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('matches snapshot as expected', () => {
  const renderTree = renderer.create(<Card {...reactProps} />)
  expect(renderTree).toMatchSnapshot()
})
