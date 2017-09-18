function basicTeenager(age) {
  return (age>=13 && age<=19)? "You are a teenager!" : undefined
}

function teenager(age) {
  return (age>=13 && age<=19)? "You are a teenager!" : "You are not a teenager"
}

function ageChecker(age) {
  if (age <= 12) {
    return "You are a kid"
  } else if (age >= 20){
    return "You are a grownup"
  } else {
    return "You are a teenager!"
  }
}

function ternaryTeenager(age) {
  return (age>=13 && age<=19)? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  switch(age) {
  case 13:
    console.log("You are a teenager");
    break;
  case age<=12:
    console.log("You have an age");
    break;
  default:
    console.log("Youhave an age");
  }
}
