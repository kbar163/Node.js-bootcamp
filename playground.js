//Async Code
//Let's do a simple example illustrating async code.

//This timeout function waits for 1 milisecond before executing
//the specified callback function
setTimeout(() => {
    console.log("I'm third");
},1);

//Since Node.js does not block the code execution waiting for the
//timeout to happen, these prints will occur prior to the
//execution of the function above
console.log("I'm first")
console.log("I'm second")