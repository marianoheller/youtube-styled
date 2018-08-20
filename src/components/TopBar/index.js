import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.svg';

import SearchBar from '../SearchBar';

const TopBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  padding: 0.75rem 0;
  background-color: white;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.12);
  z-index: ${({ theme }) => theme.zIndex.ref + 2 };

  transition: transform 1s;
  transform: ${({ isHidden }) => `translate3d(0, ${isHidden ? '-100%' : '0%'}, 0)`};
`;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ContainerLeft = _Container.extend`
`;

const ContainerRight = _Container.extend``;

const LogoContainer = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-left: 1rem;
`;

const Logo = styled.img`
  height: 1.25rem;
`;

const TopBar = props => (
  <TopBarContainer isHidden={props.isHidden}>
    <ContainerLeft>
      <LogoContainer to="/">
        <Logo src={logo} />
      </LogoContainer>
    </ContainerLeft>

    <ContainerRight>
      <SearchBar
        searchInput={props.searchInput}
        onInputChange={props.onInputChange}
        search={props.search}
      />
    </ContainerRight>
  </TopBarContainer>
);

TopBar.propTypes = {
  searchInput: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
}

export default TopBar;