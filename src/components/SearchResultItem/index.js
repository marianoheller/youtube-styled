import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ItemContainer = styled(Link)`
  display: flex;
  flex-direction: row;
`;

const Thumbnail = styled.img``;

const InfoContainer = styled.div``;

const Title = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;

const Description = styled.div`
  font-size: 0.75rem;
  color: #444;
`;


class ResultsItem extends React.Component {
  render() {
    const { title, description, thumbnailURL, videoURL } = this.props;
    return (
      <ItemContainer to={videoURL}>
        <Thumbnail src={thumbnailURL}/>
        <InfoContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </InfoContainer>
      </ItemContainer>
    );
  }
}


ResultsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnailURL: PropTypes.string.isRequired,
  videoURL: PropTypes.string.isRequired,
};

export default ResultsItem;
