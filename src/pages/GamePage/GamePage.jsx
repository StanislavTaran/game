import React, { useState, useEffect, useCallback } from 'react';
import StatusBar from '../../components/StatusBar/StatusBar';
import GameWrapper from '../../components/GameWrapper/GameWrapper';
import GameField from '../../components/GameField/GameField';
import getRandomNumber from '../../helpers/getRandomNumber';
import { SQUARES_QTY, INITIAL_TIMER_VALUE, SQUARES_QTY_ON_FIELD, GAME_STATUS } from '../../constants/gameParams';

const GamePage = () => {
  let [gameStatus, setGameStatus] = useState(GAME_STATUS.PENDING);
  let [timerValue, setTimerValue] = useState(INITIAL_TIMER_VALUE);
  let [scoreValue, setScoreValue] = useState(0);
  const [squaresIdList, setSquaresIdList] = useState(getRandomNumber(SQUARES_QTY, 5) );

  const listSquaresRef = React.createRef();

  const getUniqNumber = () => {
    const uniqNumber = getRandomNumber(SQUARES_QTY, 1);
    if (squaresIdList.indexOf(uniqNumber) === -1) {
      return uniqNumber;
    } else return getUniqNumber();
  };

  const setSquareAsActive = (elem, set = true) => {
    return elem.classList.toggle('square-green', set);
  };

  const setSquaresListAsActive = (squaresIdList) => {
    for (let item of squaresIdList) {
      const elem = (listSquaresRef).current.childNodes[item.toString()];
      if (!elem.classList.contains('square-green')) {
        setSquareAsActive(elem);
      } else continue;
    }
  };

  const resetSquaresListAsActive =()=>{
    for (let item of squaresIdList) {
      const elem = (listSquaresRef).current.childNodes[item.toString()];
        setSquareAsActive(elem,false);
    }
  }


  const generateSquaresIdList = useCallback(() => {
    const generatedSquareId = getRandomNumber(SQUARES_QTY, 1);

    if (squaresIdList.indexOf(generatedSquareId) === -1) {
      setSquaresIdList(state => [...state, generatedSquareId]);
    } else generateSquaresIdList();
  }, [squaresIdList]);

  const handleStartGame = () => {
    if (timerValue === INITIAL_TIMER_VALUE) {
      setGameStatus(GAME_STATUS.GAME_ON);
      handleSetTimerValue();
      setSquaresListAsActive(squaresIdList);
    }
  };

  const handleStartNewGame = () => {
    if (timerValue === INITIAL_TIMER_VALUE) return;
    setGameStatus(GAME_STATUS.PENDING);
    setScoreValue(0);
    setTimerValue(INITIAL_TIMER_VALUE);
    resetSquaresListAsActive()

  };

  const handleSetTimerValue = useCallback(() => {
    setTimerValue(timerValue => timerValue - 1);
  }, []);

  const handleClickOnSquare = (e) => {
    const elemId = (e.target).id;
    const isSquareActive = squaresIdList.indexOf(Number(elemId)) > -1;
    if (gameStatus === GAME_STATUS.GAME_ON && isSquareActive) {
      setSquareAsActive((listSquaresRef).current.childNodes[elemId.toString()], false);
      setScoreValue(scoreValue => scoreValue + 1);
      const newRandomNumber = getUniqNumber();
      setSquaresIdList(state => [...state.filter(item => item !== Number(elemId)), newRandomNumber]);
      setSquareAsActive((listSquaresRef).current.childNodes[(newRandomNumber).toString()]);
    }
  };

  useEffect(() => {
    let timer;
    if (gameStatus === GAME_STATUS.GAME_ON) {
      timer = setInterval(() => {
        handleSetTimerValue();
      }, 1000);
      if (timerValue <= 0) {
        setGameStatus(GAME_STATUS.GAME_OVER);
        clearInterval(timer);
      }
    }
    return () => {
      clearInterval(timer);
    };
  }, [timerValue]);

  useEffect(() => {
    if (squaresIdList.length < SQUARES_QTY_ON_FIELD) {
      setSquaresListAsActive(squaresIdList);
    }
  }, [squaresIdList]);

  return (
    <GameWrapper>

      <StatusBar
        timeLeft={timerValue}
        score={scoreValue}
        onStartGame={handleStartGame}
        onStartNewGame={handleStartNewGame}
      />
      <GameField onClickOnSquare={handleClickOnSquare} ref={listSquaresRef} />
    </GameWrapper>
  );
};

export default GamePage;
