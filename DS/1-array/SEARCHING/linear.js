function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const array = [5, 3, 10, 1, 4];
const target = 1;
console.log(linearSearch(array, target));
