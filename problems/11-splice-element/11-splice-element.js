/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    // use splice to splice someArr and index given
    return someArr.splice(index);
}

// test cases:
console.log(spliceElement([1,2,3,4,5], 0));
console.log(spliceElement([1,2,3,4,5], 1));
console.log(spliceElement([1,2,3,4,5], 2));
console.log(spliceElement([1,2,3,4,5], 3));
console.log(spliceElement([1,2,3,4,5], 4));
console.log(spliceElement([1,2,3,4,5], 5)); // out of bound, returns empty array.
