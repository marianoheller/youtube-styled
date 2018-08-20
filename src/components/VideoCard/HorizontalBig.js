import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Thumbnail from './Elements/Thumbnail';
import Menu from './Elements/Menu';
import TextInfo from './Elements/TextInfo';


const Container = styled.div`
display: flex;
flex-direction: row;
/* border: 1px black solid; */
cursor: pointer;
padding: 0.5rem 1rem;

&:hover {
  /* Did it this way cuz couldn't override underline if set in another way */
  & > div > div > div:first-child {
    text-decoration: underline;
  }
  & > div:first-child > img {
    opacity: 0.8;
    filter: brightness(80%);
  }
  & > div:first-child > div {
    opacity: 1;
  }
}
`

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

const HorizontalBig = props => {
  return (
    <Container>
      <ImageContainer>
        <Thumbnail {...props.snippet.thumbnails.medium}/>
      </ImageContainer>
      
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
    </Container>
  )
};


HorizontalBig.propTypes = {
  etag: PropTypes.string.isRequired,
  id: PropTypes.shape({
    kind: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired,
  }),
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


export default HorizontalBig;