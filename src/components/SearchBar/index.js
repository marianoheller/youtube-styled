import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
`

const StyledInput = styled.input`
  width: 100%;
`;



export default () => (
  <Container>
    <StyledInput type="text" />
  </Container>
);
