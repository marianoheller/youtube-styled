import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  border-width: 1px;
  border-color: rgba(10,10,10,0.25);
  border-style: solid;  
`

const StyledInput = styled.input`
  flex: 1;
  outline: none;
  border: none;
  padding-left: 0.25rem;

  margin: 0.1rem 0;
`;


const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: rgba(0,0,0,0);

  appearance: unset;
  &:focus {
    outline: none;
  }
`;



export default () => (
  <Container>
    <StyledInput type="text" />
    <SearchButton>SEARCH</SearchButton>
  </Container>
);
