import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  height: 100%;
  column-count: 4;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  /* grid-template-rows: repeat(3, 33% [row-start]); */
`

const Item = styled.div`
  border: 1px black solid;
`;

export default () => {
  const items = [1,2,3,4,45,5,6,6,4,4,5,6,76,7];
  return (
    <Container>
      {items.map((e, i) => <Item key={`${e}_${i}`}>{e}</Item>)}
    </Container>
  )
}