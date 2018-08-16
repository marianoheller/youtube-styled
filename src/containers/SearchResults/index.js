import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ResultItem from '../../components/SearchResultItem';


const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


class SearchResults extends React.Component {
  render() {
    const { results } = this.props;
    return (
      <ResultsContainer>
        {results.map(r => (
          <ResultItem {...r} />
        ))}
      </ResultsContainer>
    )
  }
}



SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    thumbnailURL: PropTypes.string,
    videoURL: PropTypes.string,
  })),
};


SearchResults.defaultProps = {
  results: [],
}

export default SearchResults;
