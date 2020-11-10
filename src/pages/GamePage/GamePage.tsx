import React from 'react';
import StatusBar from '../../components/StatusBar/StatusBar';
import styled from 'styled-components';

const GameZoneWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 5px;
  border: 2px solid tomato;
  border-radius: 30px 30px 20px 20px;
`;

const GamePage = () => {
  return (
    <GameZoneWrapper>
      <StatusBar />


    </GameZoneWrapper>
  );
};

export default GamePage;
