import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  margin: 5px;
  padding: 0;
  border: 2px solid tomato;
  border-color: tomato;
  border-radius: 6px;
  width: 360px;
  height: 40px;
  text-align: center;
  font-size: 26px;
  }
`;

const MyInput = props => {
  return <StyledInput {...props} />;
};

export default MyInput;
