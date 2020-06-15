/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

// create object literal with params
function Person(n, a){
    // use this.variable to assign param to object variable
    this.name = n;
    this.age = a;    
};

// create instance of object literal and input params
let boy = new Person("Harvey", 6);

// use for loop to log all keys/attributes of object instance
for(key in boy) console.log(`${key} : ${boy[key]}`);

