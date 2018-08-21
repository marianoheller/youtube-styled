import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FeedGrid from '../../components/FeedGrid';
import Spinner from '../../components/Spinner';
import * as feedActions from '../../actions/feed';
import * as playerActions from '../../actions/player';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
`;


const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.75rem;
`;


class Landing extends React.Component {
  componentDidMount() {
    this.props.getHome();
  }

  render() {
    const { isFetching, fetchError, homeVideos, setVideo } = this.props;
    return (
      <Container>
        <FeedGrid videos={homeVideos} setVideo={setVideo}/>

        { isFetching &&
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        }
        { fetchError &&
          <ErrorContainer>
            {fetchError}
          </ErrorContainer>
        }
      </Container>
    )
  }
}

Landing.propTypes = {
  setVideo: PropTypes.func.isRequired,
  getHome: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchError: PropTypes.string.isRequired,
  homeVideos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

const mapStateToProps = ({ feed }) => ({
  isFetching: feed.isFetching,
  fetchError: feed.error,
  homeVideos: feed.results,
});

const mapDispatchToProps = dispatch => ({
  getHome: () => dispatch(feedActions.getHome.request()),
  setVideo: url => dispatch(playerActions.setVideo(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
