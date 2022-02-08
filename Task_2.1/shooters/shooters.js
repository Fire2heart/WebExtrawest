export const makeArmy = (arrSize) => {
  const arr = [];
  let i = 0;

  while (i < arrSize) {
    const index = i;

    arr.push(() => {
      return index;
    });
    i++;
  }

  return arr;
};
