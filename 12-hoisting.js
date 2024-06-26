var name = "javascript";
console.log(name);

//let variable
console.log(name); // ReferenceError: Cannot access 'name' before initialization
let name = "javascript";

//const variable
console.log(name); // ReferenceError: Cannot access 'name' before initialization
const name = "javascript";

//hoisting
console.log(name); // undefine
var name = "javascript";
