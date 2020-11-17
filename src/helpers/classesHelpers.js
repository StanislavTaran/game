import { activeClasses } from '../constants/gameParams';
import { getRandomNumbers } from './numberHelpers';

const activeClassesList = Object.values(activeClasses);

export const setActiveClassForElem = elem => {
  const randomIdx = getRandomNumbers(activeClassesList.length);
  return elem.classList.add(activeClassesList[randomIdx]);
};

export const resetActiveClassForElem = elem => {
  switch (true) {
    case elem.classList.contains(activeClasses.GREEN):
      elem.classList.remove(activeClasses.GREEN);
      break;
    case elem.classList.contains(activeClasses.BLUE):
      elem.classList.remove(activeClasses.BLUE);
      break;
    case elem.classList.contains(activeClasses.RED):
      elem.classList.remove(activeClasses.RED);
      break;
    default:
      return;
  }
};

export const setActiveClassForElements = (IdList, parentRef) => {
  for (let item of IdList) {
    const elem = parentRef.current.childNodes[item.toString()];
    setActiveClassForElem(elem);
  }
};

export const resetActiveClassForElements = (IdList, parentRef) => {
  for (let item of IdList) {
    const elem = parentRef.current.childNodes[item.toString()];
    resetActiveClassForElem(elem);
  }
};
