import React from 'react';
import { bool, string } from 'prop-types';
import styled, { css } from 'styled-components';
import { darken, lighten, modularScale } from 'polished';
import { COLORS, VARS } from 'Constants';

const { TEXT, TEXT_DISABLED, DEFAULT, PRIMARY, ACCENT, WHITE } = COLORS;
const { UNIT } = VARS;

const StyledButton = styled.button`
  border: none;
  outline: none;
  color: ${TEXT};
  min-width: ${modularScale(8.8, UNIT)};
  margin: 0 ${modularScale(0.8, UNIT)};
  background-color: ${DEFAULT};
  padding: ${modularScale(0.3, UNIT)} ${modularScale(1.6, UNIT)};
  transform: skewX(-5deg);
  transition: all 0.3s;
  cursor: pointer;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 300;

  &:hover {
    background-color: ${darken(0.05, DEFAULT)};
  }

  /* -- Primary Styles */
  ${props => props.primary && css`
    color: ${WHITE};
    background-color: ${PRIMARY};

    &:hover {
      background-color: ${lighten(0.05, PRIMARY)};
    }
  `}

  /* -- Accent Styles */
  ${props => props.accent && css`
    color: ${WHITE};
    background-color: ${ACCENT};

    &:hover {
      background-color: ${lighten(0.05, ACCENT)};
    }
  `}

  /* -- Disabled Styles */
  ${props => props.disabled && css`
    pointer-events: none;
    color: ${TEXT_DISABLED};
    background-color: ${DEFAULT};
    cursor: default;
  `}
`;

const Button = props => (
  <StyledButton {...props}>
    {props.label}
  </StyledButton>
);

Button.propTypes = {
  accent: bool, // eslint-disable-line
  disabled: bool, // eslint-disable-line
  label: string,
  primary: bool, // eslint-disable-line
};

export default Button;
