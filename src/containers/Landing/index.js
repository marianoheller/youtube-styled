import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SideBar from '../../components/SideBar';
import FeedGrid from '../../components/FeedGrid';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`

const Landing = props => (
  <Container>
    <SideBar/>
    <FeedGrid />
  </Container>
)

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
