import React, {useRef, MouseEvent, Ref} from 'react';
import styled, { ThemedStyledProps } from 'styled-components';
import getRandomColor from "../../helpers/getRandomColor";

interface StyledSquareItemProps extends ThemedStyledProps<any, any> {
  isActive: boolean;
}

const StyledSquareItem = styled.li`
  width: 68px;
  height: 68px;
  margin: 0;
  padding: 0;
  border: 2px solid #fff;
  background-color: ${(props: StyledSquareItemProps) => (props.isActive ? getRandomColor() : '#a0a0a0')};
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

interface GameFieldProps {
  onClickOnSquare: (e: MouseEvent) => void;
  ref: Ref<HTMLUListElement>
}

const arraySquares = Array.from(Array(81).keys());

const GameField = ({ onClickOnSquare, ref }: GameFieldProps) => {


  return (
    <StyledSquaresList ref={ref} onClick={onClickOnSquare}>
      {arraySquares.map(item => (
        <StyledSquareItem key={item} id={item.toString()}></StyledSquareItem>
      ))}
    </StyledSquaresList>
  );
};

export default GameField;
