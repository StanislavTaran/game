import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 5px;
  padding: 10px;
  border: 2px solid tomato;
  border-color: tomato;
  border-radius: 6px;
  width: 120px;
  transition: 0.3s all;
  font-weight: 700;

  &:hover {
    cursor: pointer;
    background-color: #00bcd4;
    color: #fff;
  }
`;

const MyButton = ({ text, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {text}
    </StyledButton>
  );
};

export default MyButton;
