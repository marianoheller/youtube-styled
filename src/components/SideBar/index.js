import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideBarContainer = styled.div`
  height: 100%;
  width: 30%;
  max-width: 300px;
  min-width: 200px;
  padding: 0.75rem 0;
  overflow: hidden;
  z-index: ${({ theme }) => theme.zIndex.ref + 1 };
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  box-shadow: 2px 1px 3px rgba(0,0,0,0.12), 2px 1px 2px rgba(0,0,0,0.24);
  transition: ease all .5s;

  @media only screen and (max-width: 600px) {
    flex-direction: row;
    height: 4rem;
    width: 100%;
    max-width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: space-around;
    align-items: center;
  }
`;


export default () => (
  <SideBarContainer>
    SIDEBAR
    <div>item</div>
    <div>item</div>
    <div>item</div>
    <div>item</div>
    <div>item</div>
    <div>item</div>
  </SideBarContainer>
);