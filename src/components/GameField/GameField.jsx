import React from 'react';
import styled from 'styled-components';
import {SQUARES_QTY} from "../../constants/gameParams";

const StyledSquareItem = styled.li`
  width: 68px;
  height: 68px;
  margin: 0;
  padding: 0;
  border: 2px solid #fff;
  background-color: '#a0a0a0';
`;

const StyledSquaresList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;


const arraySquares = Array.from(Array(SQUARES_QTY).keys());


const GameField = React.forwardRef(({ onClickOnSquare }, ref) => {
  return (
    <StyledSquaresList ref={ref} onClick={onClickOnSquare}>
      {arraySquares.map(item => (
        <StyledSquareItem key={item} id={item.toString()}></StyledSquareItem>
      ))}
    </StyledSquaresList>
  );
});

export default GameField;
