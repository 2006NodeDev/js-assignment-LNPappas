/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    if(n<=2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(1));        //should be: 1
console.log(fib(5));        //should be: 5
console.log(fib("10"));     //should be: 55 <- no type-strict comparator for >/< in js
console.log(fib(15));       //should be: 610