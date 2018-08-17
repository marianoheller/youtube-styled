import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  
  @media only screen and (max-width: 600px) {
    margin-top: 3rem;
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

export default () => {
  const items = [1,2,3,4, 2,45,5,6,6,4,4,5,6,76,7,3,4,1,2,3,4];
  return (
    <Container>
      <Grid>
        {items.map((e, i) => <Item key={`${e}_${i}`}>{e}</Item>)}
      </Grid>
    </Container>
  )
}
