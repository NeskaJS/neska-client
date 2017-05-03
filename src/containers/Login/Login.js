import React from 'react';
import styled from 'styled-components';
import { Button } from 'Components';

const Background = styled.div`
  background: gray;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  background: white;
  padding: 1rem;
  min-width: 320px;
  box-shadow: 0 9px 46px 8px rgba(0,0,0,.14), 0 11px 15px -7px rgba(0,0,0,.12), 0 24px 38px 3px rgba(0,0,0,.2);
  display: flex;
`;

const Login = (props) => {
  const { test } = props; // eslint-disable-line

  return (
    <Background>
      <Wrapper>
        <Button label="Login" primary block />
      </Wrapper>
    </Background>
  );
};

export default Login;
