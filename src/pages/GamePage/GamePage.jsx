import React, { useState, useEffect, useCallback } from 'react';
import StatusBar from '../../components/StatusBar/StatusBar';
import GameWrapper from '../../components/GameWrapper/GameWrapper';
import GameField from '../../components/GameField/GameField';
import ScoreTable from '../../components/ScoreTable/ScoreTable';
import { getRandomNumbers, getUniqNumbersList } from '../../helpers/numberHelpers';
import {
  resetActiveClassForElem,
  setActiveClassForElements,
  resetActiveClassForElements,
} from '../../helpers/classesHelpers';
import {
  SQUARES_QTY,
  INITIAL_TIMER_VALUE,
  SQUARES_QTY_ON_FIELD,
  GAME_STATUS,
  defaultScoreList,
} from '../../constants/gameParams';
import Portal from '../../components/Portal/Portal';
import ResultForm from '../../components/ResultForm/ResultForm';
import usePersistedState from '../../hooks/usePesistState';
import styled from 'styled-components';

const StyledPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const GamePage = () => {
  let [isOpenModal, setIsOpenModal] = useState(false);
  let [gameStatus, setGameStatus] = useState(GAME_STATUS.PENDING);
  let [timerValue, setTimerValue] = useState(INITIAL_TIMER_VALUE);
  let [scoreValue, setScoreValue] = useState(0);
  const [squaresIdList, setSquaresIdList] = useState(getRandomNumbers(SQUARES_QTY, SQUARES_QTY_ON_FIELD));
  const [scoreList, setScoreList] = usePersistedState('score_list', defaultScoreList);

  const listSquaresRef = React.createRef();

  const handleSetTimerValue = useCallback(() => {
    setTimerValue(timerValue => timerValue - 1);
  }, []);

  const handleStartGame = () => {
    if (gameStatus === GAME_STATUS.GAME_OVER) return;
    if (timerValue === INITIAL_TIMER_VALUE || gameStatus === GAME_STATUS.PAUSE) {
      const prevStatusGame = gameStatus;
      setGameStatus(GAME_STATUS.GAME_ON);
      setTimeout(() => {
        handleSetTimerValue();
      }, 1000);
      if (prevStatusGame === GAME_STATUS.PENDING) {
        setActiveClassForElements(squaresIdList, listSquaresRef);
      }
    } else {
      setGameStatus(GAME_STATUS.PAUSE);
    }
  };

  const handleStartNewGame = () => {
    if (timerValue === INITIAL_TIMER_VALUE) return;
    setGameStatus(GAME_STATUS.PENDING);
    setScoreValue(0);
    setTimerValue(INITIAL_TIMER_VALUE);
    resetActiveClassForElements(squaresIdList, listSquaresRef);
    setSquaresIdList(getRandomNumbers(SQUARES_QTY, SQUARES_QTY_ON_FIELD));
  };

  const handleClickOnSquare = e => {
    const elemId = e.target.id;
    const isSquareActive = squaresIdList.indexOf(Number(elemId)) > -1;

    if (gameStatus === GAME_STATUS.GAME_ON && isSquareActive) {
      setScoreValue(scoreValue => scoreValue + 1);
      const newRandomNumbers = getUniqNumbersList(squaresIdList);

      e.target.classList.add('hinge')
      setTimeout(()=>{
        resetActiveClassForElem(e.target);
        e.target.classList.remove('hinge')
      },1000)

      setSquaresIdList(state => [...state.filter(item => item !== Number(elemId))]);
      if (newRandomNumbers.length) {
        setSquaresIdList(state => [...state, ...newRandomNumbers]);
        setActiveClassForElements(newRandomNumbers, listSquaresRef);
      }
    }
  };

  const handleSubmitResultForm = e => {
    e.preventDefault();
    const nameTargetValue = e.target[0].value;
    const data = { name: nameTargetValue.length ? nameTargetValue : 'Unknown', score: scoreValue };
    setScoreList(state => [...state, data]);
    setIsOpenModal(false);
  };

  useEffect(() => {
    let timer;
    if (gameStatus === GAME_STATUS.GAME_ON) {
      timer = setInterval(() => {
        handleSetTimerValue();
      }, 1000);
      if (timerValue < 1) {
        setGameStatus(GAME_STATUS.GAME_OVER);
        setIsOpenModal(true);
        clearInterval(timer);
      }
    }
    return () => {
      clearInterval(timer);
    };
  }, [timerValue]);

  useEffect(() => {
    if (squaresIdList.length < 1) {
      const uniqNumbers = getUniqNumbersList(squaresIdList, true);
      setSquaresIdList(() => [...uniqNumbers]);
      setActiveClassForElements(uniqNumbers, listSquaresRef);
    }
  }, [squaresIdList]);

  return (
    <StyledPageWrapper>
      <GameWrapper>
        {isOpenModal && (
          <Portal>
            <ResultForm onSubmitForm={handleSubmitResultForm} score={scoreValue} />
          </Portal>
        )}
        <StatusBar
          gameStatus={gameStatus}
          timeLeft={timerValue}
          score={scoreValue}
          onStartGame={handleStartGame}
          onStartNewGame={handleStartNewGame}
        />
        <GameField onClickOnSquare={handleClickOnSquare} ref={listSquaresRef} />
      </GameWrapper>
      {scoreList ? <ScoreTable participantsList={scoreList} /> : null}
    </StyledPageWrapper>
  );
};

export default GamePage;
