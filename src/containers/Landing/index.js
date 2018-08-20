import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/* import SideBar from '../../components/SideBar'; */
import FeedGrid from '../../components/FeedGrid';
import Spinner from '../../components/Spinner';
import * as feedActions from '../../actions/feed';

const Container = styled.div`
  width: 100%;
  height: 100%;
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
    const { isFetching, fetchError, homeVideos } = this.props;
    return (
      <Container>
        {/* <SideBar/> */}
        <FeedGrid videos={homeVideos}/>

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
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
