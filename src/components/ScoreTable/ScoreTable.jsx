import React, { useMemo } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const StyledList = styled.ul`
  font-size: 14px;
  list-style: decimal;
  margin: 0 10px;
`;

const StyledItem = styled.li`
  font-size: 14px;
  list-style: decimal;
  margin: 6px 0;
  padding: 0;
`;

const StyledWrapper = styled.div`
  align-self: flex-start;
`;

const ScoreTable = ({ participantsList }) => {
  const sortedParticipantsList = useMemo(() => participantsList.sort((a, b) => b.score - a.score).slice(0, 10), [
    participantsList,
  ]);
  return (
    <StyledWrapper>
      <h3>Best Players</h3>
      <StyledList>
        {sortedParticipantsList.map(item => {
          const itemId = uuidv4();
          return (
            <StyledItem key={itemId}>
              <span>{`${item.name} : ${item.score}`}</span>
            </StyledItem>
          );
        })}
      </StyledList>
    </StyledWrapper>
  );
};

export default ScoreTable;
