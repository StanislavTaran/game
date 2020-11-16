import { SQUARES_QTY } from '../constants/gameParams';

export const getRandomNumbers = (max, quantity = 1) => {
  if (quantity === 1) {
    return Math.floor(Math.random() * Math.floor(max));
  } else if (quantity > 1) {
    const arrOfNumbers = [];
    for (let i = 0; i < quantity; i++) {
      const number = getRandomNumbers(max);
      if (arrOfNumbers.indexOf(number) > -1) continue;
      arrOfNumbers.push(number);
    }
    return arrOfNumbers;
  } else return;
};

export const getUniqNumber = (primaryList, additionalList = []) => {
  let uniqNumber = getRandomNumbers(SQUARES_QTY, 1);
  if (additionalList.length) {
    if (additionalList.indexOf(uniqNumber) > -1) {
      uniqNumber = getUniqNumber(primaryList, additionalList);
    }
  }
  if (primaryList.indexOf(uniqNumber) === -1 && uniqNumber !== 0) {
    return uniqNumber;
  } else return getUniqNumber(primaryList, additionalList);
};

export const getUniqNumbersList = (primaryList, withoutZero = false) => {
  const randomQuantity = getRandomNumbers(3, 1);
  if (withoutZero && randomQuantity === 0) {
    return getUniqNumbersList(primaryList, withoutZero);
  }
  if (randomQuantity === 0) {
    return [];
  } else {
    const arrOfUniqNumbers = [];
    for (let i = 0; i < randomQuantity; i++) {
      let randomNumber = getUniqNumber(primaryList, arrOfUniqNumbers);

      arrOfUniqNumbers.push(randomNumber);
    }
    return arrOfUniqNumbers;
  }
};
