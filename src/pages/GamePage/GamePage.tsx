import React, { useState, useEffect, useCallback, MouseEvent,useRef } from 'react';
import StatusBar from '../../components/StatusBar/StatusBar';
import GameWrapper from '../../components/GameWrapper/GameWrapper';
import GameField from '../../components/GameField/GameField';
import getRandomNumber from "../../helpers/getRandomNumber";

export interface ISquareEventTarget extends EventTarget {
  id: string;
}

const initialTimerValue = 6;

const GamePage = () => {
  let [isGameOn, setIsGameOn] = useState<boolean>(false);
  let [timerValue, setTimerValue] = useState<number>(initialTimerValue);
  let [scoreValue, setScoreValue] = useState<number>(0);
  let [randomSquareId, setRandomSquareId] = useState<number | null>(null)

  const listSquaresRef = useRef<HTMLUListElement>(null!)

  const handleStartGame = () => {
    if (timerValue === initialTimerValue) {
      setIsGameOn(true);
      handleSetTimerValue();
    }
  };

  const handleStartNewGame = () => {
    if (timerValue === initialTimerValue) return;
    setIsGameOn(false);
    setScoreValue(0);
    setTimerValue(initialTimerValue);
  };

  const handleSetTimerValue = useCallback(() => {
    setTimerValue(timerValue => timerValue - 1);
  }, []);

  const handleClickOnSquare = (e: MouseEvent) => {
    console.log('id',(e.target as ISquareEventTarget).id);
    setRandomSquareId(getRandomNumber(81))
    console.log('random',getRandomNumber(81))
    console.log('ref',listSquaresRef.current)
  };

  useEffect(() => {
    let timer: number;
    if (isGameOn) {
      timer = setInterval(() => {
        handleSetTimerValue();
      }, 1000);
      if (timerValue <= 0) {
        clearInterval(timer);
      }
    }
    return () => {
      clearInterval(timer);
    };
  }, [timerValue]);

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
