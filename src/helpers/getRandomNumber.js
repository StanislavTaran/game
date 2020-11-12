const getRandomNumber = (max, quantity = 1) => {
  if (quantity === 1) {
    return Math.floor(Math.random() * Math.floor(max));
  } else if (quantity > 1) {
    const arrOfNumbers = [];
    for (let i = 0; i < quantity; i++) {
      const number = getRandomNumber(max);
      arrOfNumbers.push(number);
    }
    return arrOfNumbers;
  } else return;
};

export default getRandomNumber;

