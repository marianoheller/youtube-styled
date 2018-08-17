import React from 'react';
import styled from 'styled-components';
import { MdPlayCircleFilled as _PlayIcon } from "react-icons/md";



const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border: 1px black solid; */
  cursor: pointer;
  
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

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 0;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const Image = styled.img`
  opacity: 1;
  width: 100%;
  height: 200px;
  
  object-fit: cover;
  transition: 0.5s ease-out;
  backface-visibility: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;

  height: 200px;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  transition: 1s ease;
  opacity: 0;

  background-color: rgba(0,0,0,0.5);
`;

const UploaderImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 0 1rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 0.9rem;
`;

const Info = styled.div`
  font-size: 0.75rem;
  color: #444;
`;

const PlayIcon = styled(_PlayIcon)`
  color: rgba(200, 200, 200, 0.75);
  width: 4rem;
  height: 4rem;
`;

const Item = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="http://via.placeholder.com/300x200" />
        <Overlay>
          <PlayIcon />
        </Overlay>
      </ImageContainer>
      <SubContainer>
        <UploaderImage src="http://via.placeholder.com/30x30" />
        <TextContainer>
          <Title>title</Title>
          <Info>asdasd</Info>
        </TextContainer>
      </SubContainer>
    </Container>
  )
}


export default Item;