import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { EventContext, Styled } from 'direflow-component'
import styles from './Button.css'

const Button = ({ color, content }) => {
  const dispatch = useContext(EventContext)

  const handleClick = () => {
    const event = new Event('an-button-event')
    dispatch(event)
  }

  return (
    <Styled styles={styles}>
      <button onClick={handleClick} className={[`an-button`, `${color ? `primary` : ''}`].join(' ')}>
        {content}
      </button>
    </Styled>
  )
}

Button.defaultProps = {
  color: 'primary',
  content: 'My Button',
  onClick: undefined
}

Button.propTypes = {
  content: PropTypes.any.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
// export default withStyles(styles)(Button)
