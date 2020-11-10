import React from 'react';
import GamePage from '../../pages/GamePage/GamePage';
import styled from 'styled-components';
import Header from '../Header/Header';

const StyledAppWrapper = styled.div`
  padding: 40px 15px 0 15px;
  background-color: #e2dfdf;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <div>
        <Header />
      <StyledAppWrapper>

        <GamePage />
      </StyledAppWrapper>
    </div>
  );
}

export default App;
