import React, { ReactElement } from 'react';
import styled from 'styled-components';

const StyledGameWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 5px;
  border: 2px solid tomato;
  border-radius: 30px 30px 20px 20px;
`;

interface GameWrapperProps {
  children: [ReactElement, ReactElement];
}

const GameWrapper = ({ children }: GameWrapperProps) => {
  return <StyledGameWrapper>{children}</StyledGameWrapper>;
};

export default GameWrapper;
