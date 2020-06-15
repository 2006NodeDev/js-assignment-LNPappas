/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {

// check that sumNum is a positive number (factorials must be positive numbers)
  if( sumNum <= 0 ){
      return `Must be >= 1 for a factorial. ${sumNum} is not >= 1`;
  }
// check that sumNum is an integer (factorials must be integers)
  if ( !Number.isInteger(sumNum) ){
    return `Must be an integer for a factorial. ${sumNum} is not an integer`;
  }
// create base case for recursive function
  if (sumNum === 1 ){
      return 1;
  }
// return current number * current number -1 until current number -1 === 1 
  return sumNum*factorial(sumNum-1)
}

// test cases:
console.log(factorial(0));      // should be: no solution
console.log(factorial(1));      // should be: 1
console.log(factorial(2));      // should be: 2
console.log(factorial(-3));     // should be: no solution
console.log(factorial(4.3));    // should be: no solution
console.log(factorial(5));      // should be: 120