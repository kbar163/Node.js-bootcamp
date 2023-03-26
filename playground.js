//Arrays
const exampleArray = ['football','basketball','baseball'];

//To copy arrays we can use the spread operator

//This operator takes all the elements of the original array and
//copies them to the new one. The spread operator also works on
//objects.

const firstCopy = [...exampleArray];

//Notice that we can check this is a copy by modifying the original
//array.
exampleArray[0] = "chess";

console.log("This is the original array: " + exampleArray);
console.log("This is the copied array: " + firstCopy);

//Another cool operator JS has is the rest operator, let's see an example
//This takes all of the arguments passed to the function and bundles them
//into an array

const toArray = (...args) => {
    return args
};

console.log(toArray(1,2,3,4,5));

