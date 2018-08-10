import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SearchBar from '../SearchBar';

const TopBarContainer = styled.div`
  width: 100%;
  padding: 0.75rem 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.12);
  z-index: ${({ theme }) => theme.zIndex.ref + 1 };
`;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ContainerLeft = _Container.extend`
`;

const ContainerCenter = _Container.extend`
  flex: 1;
  max-width: 300px;
`;

const ContainerRight = _Container.extend``;

const LogoContainer = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const SearchBarContainer = styled.div``;


export default () => (
  <TopBarContainer>
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
  </TopBarContainer>
);