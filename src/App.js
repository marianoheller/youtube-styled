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
    if(lastScrollPos < event.currentTarget.scrollTop) {
      this.props.scrollDown();
      lastScrollPos = event.currentTarget.scrollTop;
    } else if(lastScrollPos > event.currentTarget.scrollTop) {
      this.props.scrollUp();
      lastScrollPos = event.currentTarget.scrollTop;
    }
  }

  render() {
    const { searchInput, setSearchInput, search, topBarIsHidden } = this.props;
    return (
      <AppContainer onScroll={this.handleScroll}>
        <TopBar
          searchInput={searchInput}
          onInputChange={setSearchInput}
          search={search}
          isHidden={topBarIsHidden}
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
  searchInput: search.input,
  isSearching: search.isFetching,
  searchError: search.error,
  topBarIsHidden: nav.topBarIsHidden,
});

const mapDispatchToProps = dispatch => ({
  setSearchInput: input => dispatch(searchActions.setInput(input)),
  search: input => dispatch(searchActions.search.request(input)),
  scrollUp: () => dispatch(navActions.scrollUp()),
  scrollDown: () => dispatch(navActions.scrollDown()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
