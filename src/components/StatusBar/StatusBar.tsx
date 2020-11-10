import React from 'react';
import styled from 'styled-components';
import MyButton from '../shared/MyButton';

const StatusBarWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const CountBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatusBar = () => {
  return (
    <StatusBarWrapper>
      <MyButton text="Start" />
      <MyButton text="New Game" />
      <CountBoard>
        <span>Points</span>
        <span>1000</span>
      </CountBoard>
      <CountBoard>
        <span>Time left</span>
        <span>00:00</span>
      </CountBoard>
    </StatusBarWrapper>
  );
};

export default StatusBar;
