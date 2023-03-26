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

//console output
console.log(userData('Kevin',27,true));

