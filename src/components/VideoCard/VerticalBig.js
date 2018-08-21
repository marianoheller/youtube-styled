import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Thumbnail from './Elements/Thumbnail';
import Menu from './Elements/Menu';
import TextInfo from './Elements/TextInfo';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5rem 0;
`;

const SubContainer = styled.div`  
  display: flex;
  flex-direction: row;
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;


const TextContainer = styled.div`
  height: 100%;
  flex: 1;
  padding-left: 1rem;

  display: flex;
  flex-direction: column;
`;

const MenuContainer = styled.div``;

const VerticalBig = props => {
  return (
    <Container onClick={() => props.setVideo(props.id)}>
      <ImageContainer>
        <Thumbnail {...props.snippet.thumbnails.medium}/>
      </ImageContainer>
      
      <SubContainer>
        <TextContainer>
          <TextInfo
            title={props.snippet.title}
            channelTitle={props.snippet.channelTitle}
            publishedAt={props.snippet.publishedAt}
          />
        </TextContainer>
        
        <MenuContainer>
          <Menu />
        </MenuContainer>
      </SubContainer>
    </Container>
  )
};


VerticalBig.propTypes = {
  setVideo: PropTypes.func.isRequired,

  etag: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired,
  snippet: PropTypes.shape({
    channelId: PropTypes.string.isRequired,
    channelTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    liveBroadcastContent: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    thumbnails: PropTypes.shape({
      default: PropTypes.shape({
        url: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      }).isRequired,
      medium: PropTypes.shape({
        url: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      }).isRequired,
      high: PropTypes.shape({
        url: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}


export default VerticalBig;