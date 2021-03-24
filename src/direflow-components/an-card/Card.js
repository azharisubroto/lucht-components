import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { EventContext } from 'direflow-component'
import styled, { css } from 'styled-components'

const StyledCard = styled.div`
  transition: all 0.2s ease-in;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 30px 30px 0 rgba(0, 0, 0, 0.06), 0 -30px 30px 0 rgba(255, 255, 255, 0.2);
  transform: translateY(0);
  transition: all 0.2s ease;
  overflow: hidden;
  cursor: default;

  ${(props) =>
    props.padding
      ? css`
          padding: ${props.padding};
        `
      : css`
          padding: 20px;
        `}
`

const Button = ({ children, ...other }) => {
  const dispatch = useContext(EventContext)

  const handleClick = () => {
    const event = new Event('an-onClick')
    dispatch(event)
  }

  return (
    <StyledCard {...other} onClick={handleClick} className="an-card">
      {!children ? (
        <>
          <slot name="content"></slot>
        </>
      ) : (
        <>{children && children}</>
      )}
    </StyledCard>
  )
}

Button.propTypes = {
  padding: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func
}

export default Button
