import React  from 'react';
import styled from 'styled-components';

const StyledGameWrapper = styled.div`
  width: 700px;
  height: 586px;
  padding: 5px;
  border: 2px solid tomato;
  border-radius: 30px 30px 20px 20px;
`;

const GameWrapper = ({ children }) => {
  return <StyledGameWrapper>{children}</StyledGameWrapper>;
};

export default GameWrapper;
