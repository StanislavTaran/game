import React from 'react';
import styled from 'styled-components';
import MyButton from '../shared/MyButton';
import MyInput from '../shared/MyInput';

const StyledFormContainer = styled.div`
  width: 400px;
  margin: 0 auto;
  border-radius: 8px;
  border: 2px solid #178585;
  background-color: #deb887;
`;

export const StyledTitle = styled.h2`
  margin: 20px auto;
  margin-bottom: 30px;
  text-align: center;
  text-transform: capitalize;
`;

const StyledForm = styled.form`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledParagraph = styled.p`
  text-align: center;
  text-transform: capitalize;
`;

const ResultForm = ({ onSubmitForm, score }) => {
  return (
    <StyledFormContainer>
      <StyledTitle>game over</StyledTitle>
      <StyledParagraph>{`Score: ${score}`}</StyledParagraph>
      <StyledForm onSubmit={onSubmitForm}>
        <label>Name </label>
        <MyInput name="name" placeholder="Enter your name" maxLength='10'/>

        <MyButton text="SAVE" type='submit' />
      </StyledForm>
    </StyledFormContainer>
  );
};

export default ResultForm;
