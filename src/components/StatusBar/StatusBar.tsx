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

const StyledSpan = styled.span`
  color: ${props => (props.color ? props.color : '#000')};
`;

interface StatusBarProps{
    timeLeft: number;
    score: number;
    onStartGame: ()=>void
    onStartNewGame: ()=>void
}

const StatusBar = ({timeLeft, score, onStartGame, onStartNewGame}:StatusBarProps) => {
  return (
    <StatusBarWrapper>
      <MyButton text="Start" onClick={onStartGame} />
      <MyButton text="New Game" onClick={onStartNewGame} />
      <CountBoard>
        <StyledSpan>Points</StyledSpan>
        <StyledSpan color="#318010">{score}</StyledSpan>
      </CountBoard>
      <CountBoard>
        <StyledSpan>Time left</StyledSpan>
        <StyledSpan color="#ff0000">{timeLeft}</StyledSpan>
      </CountBoard>
    </StatusBarWrapper>
  );
};

export default StatusBar;
