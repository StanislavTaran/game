import React, { useState, useEffect, useCallback, MouseEvent } from 'react';
import StatusBar from '../../components/StatusBar/StatusBar';
import GameWrapper from '../../components/GameWrapper/GameWrapper';
import GameField from '../../components/GameField/GameField';
import getRandomNumber from '../../helpers/getRandomNumber';
import { SQUARES_QTY } from '../../constants/gameParams';

export interface ISquareEventTarget extends EventTarget {
  id: string;
}

const initialTimerValue = 60;
let randomSquareId = 40;

const GamePage = () => {
  let [isGameOn, setIsGameOn] = useState<boolean>(false);
  let [timerValue, setTimerValue] = useState<number>(initialTimerValue);
  let [scoreValue, setScoreValue] = useState<number>(0);
  // let [randomSquareId, setRandomSquareId] = useState<number>(Math.floor(SQUARES_QTY / 2));

  const listSquaresRef = React.createRef<HTMLUListElement>();

  const setSquareAsActive = (elem: HTMLLIElement, set: boolean = true) => {
    return elem.classList.toggle('square-green', set);
  };

  const handleStartGame = () => {
    if (timerValue === initialTimerValue) {
      setIsGameOn(true);
      handleSetTimerValue();
      setSquareAsActive((listSquaresRef as any).current.childNodes[randomSquareId.toString()]);
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
    if (isGameOn && (e.target as ISquareEventTarget).id === randomSquareId.toString()) {
      setSquareAsActive((listSquaresRef as any).current.childNodes[randomSquareId.toString()], false);
      setScoreValue(scoreValue => scoreValue + 1);
      randomSquareId = getRandomNumber(SQUARES_QTY);
      setSquareAsActive((listSquaresRef as any).current.childNodes[randomSquareId.toString()]);

      // setSquareAsActive((listSquaresRef as any).current.childNodes[randomSquareId.toString()]);
    }

    console.log('id target', (e.target as ISquareEventTarget).id);
    console.log('random', randomSquareId);
    console.log('ref', (listSquaresRef as any).current.childNodes[randomSquareId]);
  };

  useEffect(() => {
    let timer: number;
    if (isGameOn) {
      timer = setInterval(() => {
        handleSetTimerValue();
      }, 1000);
      if (timerValue <= 0) {
        setIsGameOn(false)
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
