import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';
import { DIVIDER } from '../../constants/colors';

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
  flat: PropTypes.bool,
  image: PropTypes.string,
  small: PropTypes.bool,
};

export default Avatar;
