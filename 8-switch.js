function processDayOfWeek(day) {
  let message;

  switch (day) {
    case 1:
      message = "It's Monday!";
      break;
    case 2:
      message = "It's Tuesday!";
      break;
    case 3:
      message = "It's Wednesday!";
      break;
    case 4:
      message = "It's Thursday!";
      break;
    case 5:
      message = "It's Friday!";
      break;
    case 6:
      message = "It's Saturday!";
      break;
    case 7:
      message = "It's Sunday!";
      break;
    default:
      message = "Invalid day!";
  }

  console.log(message);
}

// Testing the function with different days
processDayOfWeek(1); // Output: It's Monday!
processDayOfWeek(4); // Output: It's Thursday!
processDayOfWeek(8); // Output: Invalid day!
