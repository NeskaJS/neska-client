import React from 'react';
import { bool, string } from 'prop-types';
import styled, { css } from 'styled-components';
import { COLORS } from 'Constants';

const { DIVIDER } = COLORS;

const StyledAvatar = styled.div`
  height: 3rem;
  width: 3rem;
  border: ${props => (props.flat ? 'none' : `1px solid ${DIVIDER}`)};
  border-radius: 50%;
  background: url('${props => props.image}');
  background-size: cover;

  ${props => props.small && css`
    height: 2rem;
    width: 2rem;
  `}
`;

const Avatar = props => <StyledAvatar {...props} />;

Avatar.propTypes = {
  flat: bool,
  image: string,
  small: bool,
};

export default Avatar;
