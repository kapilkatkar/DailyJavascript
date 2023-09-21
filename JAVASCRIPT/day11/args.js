//rest property
function addNumbers(...args) {
  console.log("args: ", args);
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log(addNumbers(10, 20));
console.log(addNumbers(10, 20, 10));
console.log(addNumbers(10, 20, 10, 1));
console.log(addNumbers(10, 20, 20, 90, 80));
console.log(addNumbers(10, 20, 20, 90, 80, 90, 70));
