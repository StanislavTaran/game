const formattedTimeValue = sec => {
  const minutes = Math.trunc(sec / 60);
  const seconds = sec - minutes * 60;
  return `0${minutes} : ${seconds > 9 ? seconds : '0' + seconds}`;
};
export default formattedTimeValue;
