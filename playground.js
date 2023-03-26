//Arrays
const exampleArray = ['football','basketball','baseball']

//Looping:
//The foreach loop will execute the code inside the braces for
//every element in the array that is referenced.

console.log("FOREACH EXAMPLE: ");

exampleArray.forEach(sport => {
    console.log(sport)
});

//this is the simple javascript for

console.log("FOR LOOP EXAMPLE: ");

for (let sport of exampleArray) {
    console.log(sport);
}


// JavaScript objects -- We can add a loop to an object
const person = {
    name: 'Kevin',
    age: 27,
    hobbies: ["drawing","gaming","learning","playing piano"],
    greet() {
        console.log("Hello! My name is " + this.name +
        " and I\'m " + this.age +" years old.");
    },
    showHobbies() {
        this.hobbies.forEach(hobby => {
            console.log(hobby)
        });
    }
};

//Executing the new method of the person object
console.log("showHobbies method: ")
person.showHobbies()




