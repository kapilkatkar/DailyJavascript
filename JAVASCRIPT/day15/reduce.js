const arr = [1, 2, 3, 4, 5, 6, 7, 7];
let sum = 0;
for (let item of arr) {
  sum += item;
}
console.log(sum);

//by using reduce

const result = arr.reduce((previousVal, currentVal, index, arrElem) => {
  // console.log({ previousVal, currentVal, index, arrElem });
  previousVal += currentVal;
  return previousVal;
});
console.log(result);
