import React from 'react';
import styled from 'styled-components';


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
    }
  }
`

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 0;
`;

const ImageContainer = styled.div`
`;

const Image = styled.img`
  opacity: 1;
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: 0.5s ease;
  backface-visibility: hidden;
`;

const Overlay = styled.div`
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
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

const Item = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="http://via.placeholder.com/300x200" />
        <Overlay />
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