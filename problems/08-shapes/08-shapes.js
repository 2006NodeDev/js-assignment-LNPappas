/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/

// function to print square, takes height and char as paramaters
const square = (height, character) => {
  // create a variable to iterate through the square without adjusting the height.
  let i = height;
  while (i > 0){
    // print out the specified character "repeated" height # of times (this is why the height variable cannot be altered)
    console.log(character.repeat(height));
    // decrease the number of times for the repitition, because you've already completed one. 
    i--;
  }
  // create a space for a barier btwn the next shape. 
  console.log("\n")
}

// function to print a triangle, takes height and char as paramaters
const triangle = (height, character) => {
  // create a variable to iterate through the square without adjusting the height.
  let i = height;
  // create a length variable to increase by one each repitition.
  let length = 1;
  while (i > 0){
    // print out the specified character "repeated" length # of times (increased by one each repitition)
    console.log(character.repeat(length));
    // decrease the number of iterations needed (since we've just completed one)
    i--;
    // increase the number of symbols printed on the next line by 1
    length++;
  }
  // create a space for a barier btwn the next shape.
  console.log("\n")
}

// function to print square, takes height and char as paramaters
const diamond = (height, character) => {
  // create a variable to iterate through the square without adjusting the height.
  let i = 1;
  // create variable to hold position for spaces between symbol
  // use floor function to get half of given height rounded down.
  // half because we will impliment this on each side
  // rounded down because heigt is always odd and we will have odd # of symbols in middle
  // so space + space + symb should equal height
  let space = Math.floor(height/2);
  // create variable for symb (as discussed above) starts at 1 and increases by 2 to remain odd & account for adjusted space
  let symb = 1;
  while (space >= 0){
    // print space then symbol than space again, variable adjusted each iteration
    console.log(' '.repeat(space) + character.repeat(i) + ' '.repeat(space));
    // increase the character by two to remain odd
    i += 2;
    // decrease the space by one (again there is space on each side)
    space --;
  }

  // after completion of first loop we need to readjust out variable to go the opposite direction
  // decrease by two here to account for the two added at the end of the last while loop
  i -=2;
  // increase by one to accound for the decreation at the end of the last while loop.
  space ++; 
  while(i > 1){
    // at this point our variable are now equal to the last console.log(), so we start by adjusting them to 
    // be begine the reverse affect as the first while loop.
    i -= 2;
    space++;
    // again we print space + character+ space only this time space is increasing while the character decreases
    console.log(' '.repeat(space) + character.repeat(i) + ' '.repeat(space));
  }
  // allow space after symbol
  console.log("\n")
}


function printShape(shape, height, character) {
  // switch case calls function for specified shape.
  switch (shape) {
    case "Square":
      square(height, character)
      break;
    case "Triangle":
      triangle(height, character)
      break;
    case "Diamond":
      diamond(height, character);
      break;
    default: // if one of the three alloted shape isn't specified print error message.
      console.log("Shape must be: 'Square', 'Triangle', or 'Diamond'.");
  }
}


// Test Cases:
printShape("Square", 3, "%");
printShape("Square", 1, "$");
printShape("Square", 9, "*");

printShape("Triangle", 3, "%");
printShape("Triangle", 1, "$");
printShape("Triangle", 9, "*");

printShape("Diamond", 3, "%");
printShape("Diamond", 1, "$");
printShape("Diamond", 9, "*");

printShape("square", 3, "%");