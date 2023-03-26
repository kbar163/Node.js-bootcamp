
//Object destructuring
const person = {
    name: 'Kevin',
    age: 27,
    greet() {
        console.log("Hello! My name is " + this.name +
        " and I\'m " + this.age +" years old.");
    }
};

//Let's say we have a function that takes an specific object from
//which we want to get a single key
const getName = (object) => {
    console.log(object.name);
}



//We can use the object destructuring syntax to make this more general
const getName02 = ({ name }) => {
    console.log(name)
}

//We can also create constants or variables using destructuring

let {name, age} = person;
console.log(name,age);

//It's also possible to destructure arrays by position

const exampleArray = ['football','basketball','baseball'];

let [firstElement] = exampleArray;
console.log(firstElement);


