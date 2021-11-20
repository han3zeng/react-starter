import React from 'react';
import styled from 'styled-components';
import profileSrc from 'assets/profile.png';

const Container = styled.div`
  margin-top: 60px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;

function Main() {
  return (
    <Container>
      <Image src={profileSrc} alt="profile" />
      <span>this is main page</span>
    </Container>
  );
}

export default Main;
