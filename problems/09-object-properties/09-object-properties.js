/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    // use for in loop to get key for each element in object
    for(key in someObj){

        // if value of key is an object that is not null
        // recursively log the contents inside that object
        if(typeof(someObj[key]) === "object" && someObj[key] !== null) { 
            
            // log a new line and an arrow pointer to show this is a nested object
            console.log('\n');
            console.log(key, '-> ');
            // recursively call function on nested object
            objectProperties(someObj[key]);
        }
        else {
            // log the key and the value of the element it's pointing to
            console.log(key, `: `, someObj[key]);
        }
        
    }
    console.log("");
    
}

// Test Case:
let person = {
    firstName : "Carol",
    lastName : "Gershawitz",
    dob : "04/22/1936",
    spouse : null,
    children : {
        daughter : "Mary",
        son : "Phil",
    },
    homeState : "Charlottesville",
};

objectProperties(person);
