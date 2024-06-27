//sinlgleton
// Object.create

//object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "admin",
  [mySym]: "key1",
  age: 18,
  location: "USA",
  email: "admin@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Mondays", "Saturday"],
};

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser[mySym]);

//updates in objects(mutable) Objects=================================
const cat = {
  age: 2,
  name: "Bailey",
  meow: function () {
    console.log("Meow!");
  },
  greet: function (name) {
    console.log(`Hello ${name}`);
  },
};
//change it up a bit!
cat.age += 1;
console.log(cat.age);

cat.name = "Bambi";
console.log(cat.name);

//adding properties in objects=======================
const printer = {};

printer.on = true;
printer.mode = "black and white";
printer["remainingSheets"] = 168;

//also add methods
printer.print = function () {
  console.log("The printer is printing");
};
console.log(printer.mode);

// removing properties
delete printer.mode;
console.log(printer.mode);

// apssing arguments
function changeToEight(n) {
  n = 8; // whatever n was, it is now 8... but only in this function!
}

let n = 7;

changeToEight(n);

console.log(n);

// another example with passing arguments
let string = "orange";

function changeToApple(string) {
  string = "apple";
}

changeToApple(string);

console.log(string); // orange
