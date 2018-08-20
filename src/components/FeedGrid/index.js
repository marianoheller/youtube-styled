import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import VerticalBig from '../VideoCard/VerticalBig';

const Container = styled.div`
  width: 100%;
  height: 100%;
  
  @media only screen and (max-width: 600px) {
  }
`;

const Grid = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* grid-template-rows: repeat(3, 33% [row-start]); */
  grid-gap: 1rem;
  margin-bottom: 5rem;

  @media only screen and (max-width: 600px) {
    & > div:last-child {
      margin-bottom: 3.5rem;
    }
  }
`

const FeedGrid = props => {
  return (
    <Container>
      <Grid>
        {props.videos.map((r, i) => (
          <VerticalBig
            key={`${r.id.videoId}${i}`}
            {...r}
          />
        ))}
      </Grid>
    </Container>
  )
}

FeedGrid.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default FeedGrid;
