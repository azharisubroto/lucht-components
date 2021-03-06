import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { EventContext } from 'direflow-component'
import styles from './Button.module.css'

const Button = ({ color, content }) => {
  const dispatch = useContext(EventContext)

  const handleClick = () => {
    const event = new Event('an-button-event')
    dispatch(event)
  }

  return (
    <button
      onClick={handleClick}
      className={[`${styles['an-button']}`, `${color ? ` ${styles[color]}` : ''}`].join(' ')}>
      {content}
    </button>
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
