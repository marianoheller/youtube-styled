import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TopBar from './components/TopBar';
import Landing from './containers/Landing';
import SearchResults from './containers/SearchResults';

import * as searchActions from './actions/search';
import * as navActions from './actions/nav';

let lastScrollPos = 0;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndex.ref };
  overflow-y: auto;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { history, isSearching, searchError } = this.props;
    if (!isSearching && prevProps.isSearching && !searchError) {
      if (history.location.pathname !== '/search') {
        history.push('/search');
      }
    }
  }

  handleScroll(event) {
    lastScrollPos = event.currentTarget.scrollTop;
  }

  render() {
    const { search, isSearching } = this.props;
    return (
      <AppContainer onScroll={this.handleScroll}>
        <TopBar
          isSearching={isSearching}
          search={search}
        />
        <ContentContainer>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/search" component={SearchResults} />
            <Route path="*" render={() => <Redirect to="/" />} />
          </Switch>
        </ContentContainer>
      </AppContainer>
    );
  }
}

const mapStateToProps = ({ search, nav }) => ({
  isSearching: search.isFetching,
  searchError: search.error,
});

const mapDispatchToProps = dispatch => ({
  search: input => dispatch(searchActions.search.request(input)),
  scrollUp: () => dispatch(navActions.scrollUp()),
  scrollDown: () => dispatch(navActions.scrollDown()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
