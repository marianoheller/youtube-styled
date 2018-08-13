import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SideBar from '../../components/SideBar';
import Feed from '../../components/Feed';

import * as searchActions from '../../actions/search';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`

const Landing = props => (
  <Container>
    <SideBar/>
    <Feed />
  </Container>
)

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
