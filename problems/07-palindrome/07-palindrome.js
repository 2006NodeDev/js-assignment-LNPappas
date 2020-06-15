/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {

    // user regex to remove spaces and punctuation
    // convert all chars to lower
    let str = someStr.replace(/[^\w]|_/g,"").toLowerCase();

    // split string into array, reverse the array, join reversed array back to a string
    let list = str.split('').reverse().join('');
    
    // return str same as converted list variable
    return str === list;  
}

console.log(isPalindrome("race car"));                           // true
console.log(isPalindrome("noon"));                               // true
console.log(isPalindrome("A man, a plan, a canal. Panama"));     // true
console.log(isPalindrome("happy birthday"));                     // false
console.log(isPalindrome(""));                                   // true
