import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';

import HorizontalBig from '../../components/VideoCard/HorizontalBig';
import Spinner from '../../components/Spinner';
import * as searchActions from '../../actions/search';


const ResultsContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
  width: 100%;
  margin-top: 4rem;
`;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.75rem;
`;


class SearchResults extends React.Component {
  componentDidMount() {
    /* console.log("RESULTSSS", this.props);
    if (!this.props.results.length) {
      this.props.history.replace('/');
    } */
  }

  handleSensor= vis => {
    if (!vis || !this.props.results.length) return;
    this.props.searchMore(this.props.searchedInput, this.props.nextPageToken);
  }

  render() {
    const { results, isFetching, searchError } = this.props;
    return (
      <ResultsContainer>
        {results.map((r, i) => (
          i === results.length - 1 ?
          <React.Fragment key={`visSensor${i}`}>
            <VisibilitySensor key={`visSensor${i}`} onChange={this.handleSensor} />
            <HorizontalBig key={`${r.id.videoId}${i}`} {...r} />
          </React.Fragment>
          :
          <HorizontalBig key={`${r.id.videoId}${i}`} {...r} />
        ))}
        { isFetching &&
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        }
        { searchError &&
          <ErrorContainer>
            {searchError}
          </ErrorContainer>
        }
      </ResultsContainer>
    )
  }
}



SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})),
  searchedInput: PropTypes.string.isRequired,
  nextPageToken: PropTypes.string.isRequired,
  searchMore: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  searchError: PropTypes.string.isRequired,
};


SearchResults.defaultProps = {
  results: [],
}


const mapStateToProps = ({ search }) => ({
  results: search.results,
  searchedInput: search.searchedInput,
  nextPageToken: search.nextPageToken,
  isFetching: search.isFetching,
  searchError: search.error,
});

const mapDispatchToProps = dispatch => ({
  searchMore: (input, nextPageToken) => dispatch(searchActions.searchMore.request(input, nextPageToken)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults));
