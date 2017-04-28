import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { COLORS } from '../../constants/variables';

const StyledButton = styled.button`
  outline: none;
  border: none;
  color: #333;
  background-color: ${COLORS.default};
  padding: 0.5rem 2rem;
  transform: skewX(-5deg);
  transition: all 0.3s;
  cursor: pointer;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 300;

  &:hover {
    background-color: ${darken(0.05, COLORS.default)};
  }

  /* -- Primary Styles */
  ${props => props.primary && css`
    color: white;
    background-color: ${COLORS.primary};

    &:hover {
      background-color: ${lighten(0.05, COLORS.primary)};
    }
  `}

  /* -- Accent Styles */
  ${props => props.accent && css`
    color: white;
    background-color: ${COLORS.accent};

    &:hover {
      background-color: ${lighten(0.05, COLORS.accent)};
    }
  `}

  /* -- Disabled Styles */
  ${props => props.disabled && css`
    pointer-events: none;
    color: #bdc3c7;
    background-color: ${COLORS.default};
    cursor: default;
  `}
`;

const Button = props => (
  <StyledButton {...props}>
    {props.label}
  </StyledButton>
);

Button.propTypes = {
  accent: PropTypes.bool, // eslint-disable-line
  disabled: PropTypes.bool, // eslint-disable-line
  label: PropTypes.string,
  primary: PropTypes.bool, // eslint-disable-line
};

export default Button;
