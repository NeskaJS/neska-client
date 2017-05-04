import React from 'react';
import styled from 'styled-components';
import { Button, Input } from 'Components';

const Background = styled.div`
  position: absolute;
  background: #333;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Wrapper = styled.div`
  position: relative;
  background: white;
  padding: 1rem;
  min-width: 320px;
  box-shadow: 0 9px 46px 8px rgba(0,0,0,.14), 0 11px 15px -7px rgba(0,0,0,.12), 0 24px 38px 3px rgba(0,0,0,.2);
  flex-direction: column;
  display: flex;
  z-index: 999;

  & > button {
    margin: 2rem 0 0 0;
  }

  & > input {
    margin: 0.5rem 0;
  }
`;

const Video = styled.video`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  opacity: 0.4;
`;

const Login = props => {
  const { test } = props; // eslint-disable-line

  return (
    <Background>
      <Wrapper>
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
        <Button label="Login" primary block />
      </Wrapper>
      <Video src="/videos/landing.mp4" autoPlay loop muted preload />
    </Background>
  );
};

export default Login;
