/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    // if the number is less then/equal to 2 then return 1
    // this is the base case and/or stopping logic
    if(n<=2) return 1;

    /* return the function fib with one index lower and two indexes lower. 
         a,b = b, a+b
     
        fib(3) return fib(2) + fib(1)
        equivalent to: return 1 + 1 == 2 <- this is the right answer. 

        fib(4) return fib(3) + fib(2)
        we know fib(3) = 2 (see above) + and fib(2) = 1 (see base case)
        therefore fib(4) = 3
    */
    return fib(n-1) + fib(n-2);
}

console.log(fib(1));        //should be: 1
console.log(fib(2));        //should be: 1
console.log(fib(3));        //should be: 2
console.log(fib(4));        //should be: 3
console.log(fib(5));        //should be: 5
console.log(fib("10"));     //should be: 55 <- no type-strict comparator for >/< in js
console.log(fib(15));       //should be: 610