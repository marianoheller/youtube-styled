import React from 'react';
import styled from 'styled-components';

import TopBar from './components/TopBar';
import Landing from './containers/Landing';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndex.ref };
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <TopBar />
        <ContentContainer>
          <Landing />
        </ContentContainer>
      </AppContainer>
    );
  }
}

export default App;
