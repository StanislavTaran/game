import React from 'react';
import styled from 'styled-components';
import MyButton from '../shared/MyButton';
import imageTroll from '../../assets/troll.svg';
import { GAME_STATUS } from '../../constants/gameParams';
import getFormattedTimerValue from "../../helpers/getFormatedTimerValue";

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

const StyledImage = styled.img`
  display: block;
  width: 80px;
  height: auto;
`;

const StatusBar = ({ timeLeft, score, onStartGame, onStartNewGame, gameStatus }) => {
  const isWaiting = gameStatus === GAME_STATUS.PAUSE || gameStatus === GAME_STATUS.PENDING;
  ;

  const formattedTimer = getFormattedTimerValue(timeLeft)

  return (
    <StatusBarWrapper>
      <StyledImage src={imageTroll} alt="troll" />
      <MyButton text={isWaiting ? 'Start' : 'Pause'} onClick={onStartGame} />
      <MyButton text="New Game" onClick={onStartNewGame} />
      <CountBoard>
        <StyledSpan>Points</StyledSpan>
        <StyledSpan color="#318010">{score}</StyledSpan>
      </CountBoard>
      <CountBoard>
        <StyledSpan>Time left</StyledSpan>
        <StyledSpan color="#ff0000">{formattedTimer}</StyledSpan>
      </CountBoard>
    </StatusBarWrapper>
  );
};

export default StatusBar;
