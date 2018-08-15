import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TopBar from './components/TopBar';
import Landing from './containers/Landing';

import * as searchActions from './actions/search';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndex.ref };
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

class App extends React.Component {
  render() {
    const { searchInput, setSearchInput, search } = this.props;
    return (
      <AppContainer>
        <TopBar
          searchInput={searchInput}
          onInputChange={setSearchInput}
          search={search}
        />
        <ContentContainer>
          <Landing />
        </ContentContainer>
      </AppContainer>
    );
  }
}

const mapStateToProps = ({ search }) => ({
  searchInput: search.input,
});

const mapDispatchToProps = dispatch => ({
  setSearchInput: input => dispatch(searchActions.setInput(input)),
  search: input => dispatch(searchActions.search.request(input)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
