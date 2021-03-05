import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { EventContext, Styled } from 'direflow-component'
import styles from './Button.css'

const Button = (props) => {
  const dispatch = useContext(EventContext)

  const handleClick = () => {
    const event = new Event('an-button-event')
    dispatch(event)
  }

  return (
    <Styled styles={styles}>
      <button onClick={handleClick} className={`an-button${props.color ? ` ${props.color}` : ''}`}>
        {props.content}
      </button>
    </Styled>
  )
}

Button.defaultProps = {
  color: 'primary',
  content: 'My Button'
}

Button.propTypes = {
  content: PropTypes.any,
  color: PropTypes.string
}

export default Button
