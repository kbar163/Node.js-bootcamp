// JavaScript objects

const person = {
    name: 'Kevin',
    age: 27,
    greet() {
        console.log("Hello! My name is " + this.name +
        " and I\'m " + this.age +" years old.");
    }
};

person.greet();


