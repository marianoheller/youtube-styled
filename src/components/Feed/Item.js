import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px black solid;
`

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
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
      <Image src="asd" />
      <SubContainer>
        <Title>title</Title>
        <Info>asdasd</Info>
      </SubContainer>
    </Container>
  )
}


export default Item;