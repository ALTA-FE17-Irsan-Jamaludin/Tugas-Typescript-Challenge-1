const findMinAndMax = (arr: number[]): string | number => {
  const copyArr = [...arr];
  let minArr: number = 0;
  let maxArr: number = 0;

  for (let i = 0; i < copyArr.length; i++) {
    for (let j = 0; j < copyArr.length; j++) {
      if (copyArr[j] > copyArr[j + 1]) {
        let temp = copyArr[j];
        copyArr[j] = copyArr[j + 1];
        copyArr[j + 1] = temp;
        minArr = copyArr[0];
        maxArr = copyArr[copyArr.length - 1];
      }
    }
  }

  const indexMinArr = arr.indexOf(minArr);
  const indexMaxArr = arr.indexOf(maxArr);

  return `Min: ${minArr} Index : ${indexMinArr} , Max : ${maxArr} Index : ${indexMaxArr}`;
};

console.log(findMinAndMax([5, 7, 4, -2, -1, 8]));
// min: -2 index: 3 max: 8 index: 5
console.log(findMinAndMax([2, -5, -4, 22, 7, 7]));
// min: -5 index: 1 max: 22 index: 3
console.log(findMinAndMax([4, 3, 9, 4, -21, 7]));
// min: -21 index: 4 max: 9 index: 2
console.log(findMinAndMax([-1, 5, 6, 4, 2, 18]));
// min: -1 index: 0 max: 18 index: 5
console.log(findMinAndMax([-2, 5, -7, 4, 7, -20]));
