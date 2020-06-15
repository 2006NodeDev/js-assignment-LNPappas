/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

// Dynamic Programming with Recurssion

// using object as dictionary to store cases
let memo = {
    1:0,
    2:1
}

function fib(n) {
    // if n in memo, return value
    // if n is zero return it's value in memo, not falsey value
    if(memo[n] || memo[n] === 0){
        return memo[n]
    }
    else{
        // if n not in memo, calculate it and any other values need through recurssion
        // add those new values to memo
        memo[n] = fib(n-1) + fib(n-2);

        // return the calculated/stored value.
        return memo[n]
    }
}

console.log(fib(1));        //should be: 0
console.log(fib(2));        //should be: 1
console.log(fib(3));        //should be: 1
console.log(fib(4));        //should be: 2
console.log(fib(5));        //should be: 3
console.log(fib(6));        //should be: 5
console.log(fib("10"));     //should be: 34 
console.log(fib(15));       //should be: 377