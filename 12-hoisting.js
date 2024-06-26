var name = "javascript";
console.log(name);

//let variable
console.log(name); // ReferenceError: Cannot access 'name' before initialization
let name = "javascript";

//const variable
console.log(name); // ReferenceError: Cannot access 'name' before initialization
const name = "javascript";

//hoisting   --> two types of hoisting
//(1): partially hoisted(in variable)
//(2): fully hoisted(in function)
console.log(name); // undefine
var name = "javascript";

//hoisting with function
console.log(name());
function name() {
  console.log("Javascript");
}

//=================================Interview question with slight changes the above example
console.log(name()); // ReferenceError: name is not defined //because hoisting needs to keyword and in this example the keyword is function, function keyword is wrap in parenthesis
//function declaration
(function name() {
  console.log("Javascript");
});

//=================================another one example
console.log(name()); // ReferenceError: Cannot access 'name' before initialization
//function expression
const name = () => {
  //hoisting is not working with const ❌
  console.log("Javascript");
};

//=================================another one example
console.log(name()); // TypeError: name is not a function
//function expression
var name = () => {
  // this is var but call as a function for console. this time need to function keyword instead of var ❌
  console.log("Javascript");
};

//=================================another one example
console.log(name); // undefined
//function expression
var name = () => {
  console.log("Javascript");
};
