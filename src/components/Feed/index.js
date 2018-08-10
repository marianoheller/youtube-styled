import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const Container = styled.div`
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 600px) {
    margin-top: 0.5rem;
  }
`;

const Grid = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  /* grid-template-rows: repeat(3, 33% [row-start]); */
  margin-bottom: 5rem;
`

export default () => {
  const items = [1,2,3,4,45,5,6,6,4,4,5,6,76,7,3,4,1,2,3,4];
  return (
    <Container>
      <Grid>
        {items.map((e, i) => <Item key={`${e}_${i}`}>{e}</Item>)}
      </Grid>      
    </Container>
  )
}
