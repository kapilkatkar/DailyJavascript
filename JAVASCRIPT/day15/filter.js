const arr = [1, 2, 3, 4, 5, 6, 7, 8, 8];

//legacy way
let filterdV1 = [];
for (let item of arr) {
  if (item % 3 === 0 || item % 5 === 0) {
    filterdV1.push(item);
  }
}
console.log(filterdV1);

//ES 6 way
const filterdV2 = arr.filter((item) => item % 3 === 0 || item % 5 === 0);
console.log(filterdV2);

const filterdV3 = arr.filter((item) => {
  if (item % 3 === 0 || item % 5 === 0) {
    return true;
  }
  return false;
});
console.log(filterdV3);

const filterdV4 = arr.filter((item) => item % 15 === 0);
console.log(filterdV4);
console.log({ filterdV1, filterdV2, filterdV3, filterdV4 });
