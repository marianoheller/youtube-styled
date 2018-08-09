import React from 'react';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import Landing from './containers/Landing';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Navbar />
        <ContentContainer>
          <Landing />
        </ContentContainer>
      </AppContainer>
    );
  }
}

export default App;
