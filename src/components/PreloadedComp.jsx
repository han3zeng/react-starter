import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 60px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid green;
`;

function PreloadedComp() {
  return (
    <Container>
      <div>this is preloaded comp</div>
    </Container>
  );
}

export default PreloadedComp;
