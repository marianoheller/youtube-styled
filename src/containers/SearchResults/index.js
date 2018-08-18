import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HorizontalBig from '../../components/VideoCard/HorizontalBig';


const ResultsContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
  width: 100%;
  margin-top: 4rem;
`;


class SearchResults extends React.Component {
  componentDidMount() {
    /* console.log("RESULTSSS", this.props);
    if (!this.props.results.length) {
      this.props.history.replace('/');
    } */
  }

  render() {
    const { results } = this.props;
    return (
      <ResultsContainer>
        {results.map((r, i) => (
          <HorizontalBig key={`${r.id.videoId}${i}`} {...r} />
        ))}
        <VisibilitySensor onChange={onChange} />
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


const mapStateToProps = ({ search }) => ({
  results: search.results,
});

const mapDispatchToProps = () => ({})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults));
