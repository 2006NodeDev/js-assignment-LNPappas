/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
/* 
    use bitwise & operator:
    number = 11:
          1011 <- 11 in binary
        & 0001 <- 1 in binary
        --------
          0001 <- 1 !== 0 and is odd

    number = 14:
          1110 <- 14 in binary
        & 0001 <- 1 in binary
        --------
          0000 <- 0 === 0 and is even
*/
  return (someNum & 1) === 0;
}

// test cases:
console.log(isEven(11));    // false
console.log(isEven(14));    // true
console.log(isEven(2));     // true
console.log(isEven(1));     // false
console.log(isEven(0));     // true
console.log(isEven(-1));    // false
console.log(isEven(-2));    // true