import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border: 1px black solid; */
`

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 0;
`

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
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
      <Image src="http://via.placeholder.com/300x200" />
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