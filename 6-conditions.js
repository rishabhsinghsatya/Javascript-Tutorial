//Basic if statement
let temperature = 25;

if (temperature > 30) {
  console.log("It's a hot day!");
} else {
  console.log("It's not too hot today.");
}

//if-else if-else statement
let timeOfDay = "morning";

if (timeOfDay === "morning") {
  console.log("Good morning!");
} else if (timeOfDay === "afternoon") {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

//Nested if statements
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
  if (isAdmin) {
    console.log("You are logged in as an admin.");
  } else {
    console.log("You are logged in as a regular user.");
  }
} else {
  console.log("Please log in to access the content.");
}

//Ternary operator
let isRaining = true;

let weatherMessage = isRaining
  ? "Remember to take an umbrella!"
  : "No need for an umbrella today.";
console.log(weatherMessage);

//Switch statement
let dayOfWeek = "Monday";
let schedule;

switch (dayOfWeek) {
  case "Monday":
    schedule = "Start of the workweek";
    break;
  case "Friday":
    schedule = "Almost the weekend!";
    break;
  default:
    schedule = "Regular day";
}

console.log(`Today's schedule: ${schedule}`);
