import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { EventContext } from 'direflow-component'
import styled, { css } from 'styled-components'

const StyledButton = styled.div`
  display: inline-flex;
  transition: all 0.2s ease-in;
  border: none;
  border-radius: 50px;
  background: #fff;
  line-height: 1;
  font-weight: 500;
  color: #fff;
  outline: none;
  cursor: pointer;
  letter-spacing: 1px;
  padding-left: 30px;
  padding-right: 30px;
  align-items: center;

  ${(props) =>
    props.height
      ? css`
          height: ${props.height}px;
        `
      : css`
          height: 47px;
        `}

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

const Button = ({ color, text, children, ...other }) => {
  const dispatch = useContext(EventContext)

  const handleClick = () => {
    const event = new Event('an-onClick')
    dispatch(event)
  }

  return (
    <StyledButton {...other} onClick={handleClick} className={[`${color ? color : 'secondary'}`].join(' ')}>
      {!children ? (
        <>
          <slot name="content"></slot>
        </>
      ) : (
        <>
          {children && children}
          {text && text}
        </>
      )}
    </StyledButton>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
