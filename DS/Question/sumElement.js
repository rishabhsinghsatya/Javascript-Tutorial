//SumOfElement with Two  pointer approach

function sumElement(arr, X) {
  let left = 0;
  let right = arr.length - 1;
  let sum = arr[left] + arr[right];
  while (left < right) {
    if (sum > X) {
      right--;
    }
    if (sum < X) {
      left++;
    }
    return true;
  }
}

let arr = [2, 4, 6, 8, 10];
let X = 14;

console.log(arr);
console.log(sumElement(arr, X));
