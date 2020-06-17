/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/


// create es6 person class
class Person{
    // create constructor
    constructor(n, a){
        this.name = n;
        this.age = a;
    }    
};

// create instance of object literal and input params
let boy = new Person("Harvey", 6);

// use for loop to log all keys/attributes of object instance
for(key in boy) console.log(`${key} : ${boy[key]}`);


// additional practice to understand differences ways to create object:

// with factory function
const person2 = (name,age) => {
    return { name, age }; // create object literal with params
};

// new not needd to instantiate the class
let girl = person2('Mildred', 87);
console.log('\n');
for(element in girl) console.log(`${element} : ${girl[element]}`);

// create person object/function as class
// this is old way
function Person3(n,a){
    this.name = n;
    this.age = a;
}

// new keyword again needed to instantiate the class.
const them = new Person3('Sam', 14);
console.log('\n');
for(key in them) console.log(`${key} : ${them[key]}`);