import React from 'react';
import { bool, string } from 'prop-types';
import styled from 'styled-components';
import { COLORS, VARS } from 'Constants';

const { TEXT, PRIMARY } = COLORS;
const { UNIT } = VARS;

const StyledInput = styled.input`
  border-bottom: 1px solid ${PRIMARY};
  border-left: 0;
  border-right: 0;
  border-top: 0;
  color: ${TEXT};
  display: block;
  font-size:  ${UNIT};
  outline: none;
  padding: 0.4rem 0;
  width: 100%;
`;

const Input = props => <StyledInput {...props} />;

Input.propTypes = {
  accent: bool, // eslint-disable-line
  block: bool, // eslint-disable-line
  disabled: bool, // eslint-disable-line
  label: string,
  primary: bool, // eslint-disable-line
};

export default Input;
