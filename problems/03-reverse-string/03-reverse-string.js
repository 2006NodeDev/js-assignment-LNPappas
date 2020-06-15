/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    // make sure paramater is a string/ convert to string if not
        // this is probably extra for this assignment
    // split paramater after each character to create array
    let list = someStr.toString().split("");

    // reverse the array
    // join the array into a string
    // return the reversed string
    return list.reverse().join('');

  
}

// test cases
console.log(reverseStr("abc"));
console.log(reverseStr("race car"));
console.log(reverseStr("12345"));

console.log(reverseStr(12345));
let num = reverseStr(12345);
console.log(typeof(num));

console.log(reverseStr(""));
let sp = reverseStr("");
console.log(typeof(sp));