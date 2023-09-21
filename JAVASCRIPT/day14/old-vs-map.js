const arr = [1, 2, 3, 4, 5, 6, 7]; // [1+1, 2+1, 3+1, 4+1, 5+1, 6+1, 7+1]

// Old legacy way
const arrV2 = [];
for (let i = 0; i < arr.length; i++) {
  arrV2.push(arr[i] + 1);
}

// Old legacy way
const arrV3 = [];
for (let i = 0; i < arr.length; i++) {
  arrV3.push(arr[i] * 2);
}

// Old legacy way
const arrV4 = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    arrV4.push(arr[i] * 2);
  } else {
    arrV4.push(arr[i]);
  }
}

console.log(arr, arrV2, arrV3, arrV4);

// New way -> Map

// +1
const arrPlusOne = arr.map((item) => item + 1);

// *2
const arrMultiplyTwo = arr.map((item) => item * 2);

// *2 if odd
const arrMultiplyTwoIfOdd = arr.map((item) => {
  if (item % 2 !== 0) {
    return item * 2;
  }
  return item;
});
