import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { EventContext } from 'direflow-component'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: inline-block;
  transition: all 0.2s ease-in;
  padding: 0.9375rem 1.6625rem;
  border: none;
  border-radius: 50px;
  background: #fff;
  color: #181d27;
  line-height: 1;
  font-weight: 500;
  color: #fff;
  outline: none;
  cursor: pointer;
  letter-spacing: 1px;

  &.primary {
    background: #2d53fe;
    box-shadow: 0 5px 15px rgba(32, 41, 83, 0.15), 0 15px 40px rgba(45, 83, 254, 0.2);

    &:hover {
      background-color: #012ef7;
    }
  }

  &.secondary {
    background: #cecece;
    box-shadow: 0 5px 15px rgba(32, 41, 83, 0.15), 0 15px 40px rgba(135, 135, 135, 0.2);

    &:hover {
      background-color: #c2c2c2;
    }
  }
`

const Button = ({ color, content }) => {
  const dispatch = useContext(EventContext)

  const handleClick = () => {
    const event = new Event('an-button-event')
    dispatch(event)
  }

  return (
    <StyledButton onClick={handleClick} className={[`${color ? color : 'secondary'}`].join(' ')}>
      {content}
    </StyledButton>
  )
}

Button.defaultProps = {
  color: 'primary',
  content: 'Button',
  onClick: undefined
}

Button.propTypes = {
  content: PropTypes.any.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
// export default withStyles(styles)(Button)
