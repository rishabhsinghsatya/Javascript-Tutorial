const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr);

// const newArr = new Array(1, 2, 3, 5, 8);
// console.log(newArr[1]);

//array methods ==============================================================
// myArr.push(6);
// console.log(myArr);

// myArr.push(7);
// console.log(myArr);

// myArr.pop();
// console.log(myArr);

// myArr.unshift(9);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(9)); //-1
// console.log(myArr.indexOf(5)); //5

// const newArr = myArr.join();

// console.log(typeof newArr);
// console.log(newArr);
// console.log(myArr);

// reduce function ==========================================================
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

//slice or splice ===========================================================

//spread operator=====================

//flat function=======================
