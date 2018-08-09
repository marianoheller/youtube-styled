import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SearchBar from '../SearchBar';

const NavbarContainer = styled.div`
  width: 100%;
  padding: 0.75rem 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.12);
`;

const ContainerLeft = styled.div``;
const ContainerCenter = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  max-width: 300px;
`;
const ContainerRight = styled.div``;

const LogoContainer = styled(Link)``;
const SearchBarContainer = styled.div``;


export default () => (
  <NavbarContainer>
    <ContainerLeft>
      <LogoContainer to="/">
        LOGO
      </LogoContainer>
    </ContainerLeft>
    
    <ContainerCenter>
      <SearchBar />
    </ContainerCenter>

    <ContainerRight>
      RIGHT
    </ContainerRight>
  </NavbarContainer>
);