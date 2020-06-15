/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    // put logic in try/catch block to catch exceptions
    try{
        // get the length of the substring
        const len = someStr.length;

        // if no startIndex or endIndex provided through exception
        if(someStr === undefined || startIndex === undefined || !endIndex === undefined) throw `input incorrect: must include string, start index, and end index`

        // if start index of end index out of range:
        if(startIndex > len || endIndex > len) throw `input incorrect: index is out of bounds`

        // if start index before end index:
        else if((startIndex-endIndex) > -1)throw `input incorrect: start index must be less than end index`
        // return the substing using the slice method
        // two paramaters are start index(inclusive) and end index (optional & exclusive)
        return someStr.slice(startIndex, endIndex);
    }
    // catch and return errors thrown by exceptions
    catch(err){
        return err;
    }

}

// Test Cases:
console.log(substring("012345", 2, 4));
console.log(substring("0 2 4 6", 2, 2));
console.log(substring("0 2 4 6", 2, 5));
console.log(substring(""));
console.log(substring("12345", 5, 7));
console.log(substring("12345", 0, 5));
console.log(substring("12345", 4, 3));

