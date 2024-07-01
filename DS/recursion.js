// 1. factorial of a number
function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// 2. fabonacci series
function fabonacci(n) {
  if (n <= 1) return n;
  return fabonacci(n - 2) + fabonacci(n - 1);
}
console.log(fabonacci(5)); // 8

//write fabonacci series
function fab(n) {
  const series = [0, 1];
  for (let i = 2; i < n; i++) {
    series[i] = series[i - 2] + series[i - 1];
  }
  return series;
}
console.log(fab(5)); // [0,1,1,2,3]

// 3. sum of array elements
function sumArray(arr) {
  if (arr.length == 0) return 0;

  return arr[0] + sumArray(arr.slice(1));
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15

// 4. reverse a string
function reverseString(str) {
  let strRev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strRev += str[i];
  }
  return strRev;
}
console.log(reverseString("hello")); //olleh

// 5. power of a number ( 2^3 = 2*2*2 = 8 )
function power(base, exponent) {
  if (exponent == 0) return 1;
  return base * power(base, exponent - 1);
}
console.log(power(2, 3)); // 8
