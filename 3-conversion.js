// String to Number
var str = "42";
var num1 = parseInt(str); // Converts to integer
var num2 = parseFloat(str); // Converts to floating-point number
console.log(typeof num1);
console.log(typeof num2);

//Number to String
var num = 42;
var str1 = num.toString();
var str2 = num + "";
console.log(typeof num);
console.log(typeof str1);
console.log(typeof str2);

//String to Boolean
var str = "true";
var bool1 = Boolean(str); // Using Boolean() constructor
console.log(typeof str);
console.log(typeof bool1);

// Number to Boolean
var num = 0;
var bool1 = Boolean(num); // Using Boolean() constructor
console.log(typeof num);
console.log(typeof bool1);

//Boolean to String
var bool = true;
var str = bool + "";
console.log(typeof bool);
console.log(typeof str);

//String to Array
var str = "apple,banana,cherry";
var arr = str.split(",");
console.log(typeof str);
console.log(typeof arr);
console.log(arr);

//Array to String
var arr = ["apple", "banana", "cherry"];
var str = arr.join(", ");
console.log(typeof arr);
console.log(typeof str);
console.log(str);

//String to Object
var str = '{"name":"John","age":30}';
var obj = JSON.parse(str);
console.log(typeof str);
console.log(typeof obj);
console.log(obj);
