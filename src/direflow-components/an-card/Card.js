import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCard = styled.div`
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 30px 30px 0 rgba(0, 0, 0, 0.06), 0 -30px 30px 0 rgba(255, 255, 255, 0.2);
  transform: translateY(0);
  transition: all 0.2s ease;
  overflow: hidden;
  cursor: pointer;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : 'initial')}px;
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : 'initial')}px;
`

const Card = ({ children, ...other }) => {
  return <StyledCard {...other}>{children ? children : <slot name="content"></slot>}</StyledCard>
}

Card.defaultProps = {
  children: undefined,
  other: undefined
}

Card.propTypes = {
  children: PropTypes.node,
  other: PropTypes.any
}

export default Card
