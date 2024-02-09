const arr = [1, 2, 3, 4, 5];
let n = arr.length;
let sum = 0;

//with for loop
const sumForLoop = (arr, n, sum) => {
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  return sum;
};

//with while loop
const sumWhileLoop = (arr, n, sum) => {
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
};
console.log(sumForLoop(arr, n, sum));
console.log(sumWhileLoop(arr, n, sum));
