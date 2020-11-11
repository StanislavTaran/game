import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 5px;
  padding: 10px;
  border: 2px solid tomato;
  border-color: tomato;
  border-radius: 6px;
  width: 120px;
  transition: .3s all;
  font-weight: 700;
  
  &:hover{
  cursor: pointer;
  background-color: #00bcd4;
  color: #fff;
  
  }
`;

interface MyButtonProps {
  text: string;
  onClick?: ()=> void
}

const MyButton = ({ text, onClick }: MyButtonProps) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default MyButton;
