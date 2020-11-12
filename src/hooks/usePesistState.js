import { useEffect, useState } from 'react';

export default function usePersistedState(key, defaultValue) {
  const [scoreList, setScoreList] = useState(() => JSON.parse(localStorage.getItem(key)) || defaultValue);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(scoreList));
  }, [key, scoreList]);
  return [scoreList, setScoreList];
}
