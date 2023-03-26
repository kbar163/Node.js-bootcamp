//Javascript refresher. Core functionalities/features.

//variable declarations
const myName = 'Kevin';
let myAge = 27;
let hasHobbies = true;

//functions
function userData(userName,userAge,userHasHobby) {
    return (
        'Name is ' + userName +
        ', age is ' + userAge +
        ' and the user has hobbies ' + userHasHobby
    );
}

//arrow functions

//implicit return and concise body syntax
const add = (a,b) => a+b;


//console output
console.log(userData('Kevin',27,true));
console.log(add(1,2));

