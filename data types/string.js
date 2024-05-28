const fName = "John";
const lName = "doe";
// console.log(fName + " " + lName);
//string intepolation
console.log(`My name is ${fName} ${lName}`); //direct inject variables in placeholder

//================================================
// const gameName = new String("playSTation");
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("a"));

//===========================================================
const gameName = new String("play-station");

console.log(gameName.substring(0, 6));
console.log(gameName.slice(0, 6));

//===========================================================
const username = "   cguunucuci  ";
console.log(username);
console.log(username.trim()); //remove starting and ending space

const url = "https://localhost/api/play%20station";
console.log(url.replace("%20", "-"));

console.log(url.includes("play")); //true
