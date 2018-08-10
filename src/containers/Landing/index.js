import React from 'react';
import styled from 'styled-components';

import SideBar from '../../components/SideBar';
import Feed from '../../components/Feed';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`

export default () => (
  <Container>
    <SideBar />
    <Feed />
  </Container>
)