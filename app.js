const http = require('http');

const express = require('express');

const app = express();

//Middlewares
app.use((req, res, next) => {
    console.log("In the first middleware!");
    next(); //Allows the request to continue to the next middlewate in line
});

app.use((req, res, next) => {
    console.log("In the second middleware!");
    res.send('<h1>Hello world from express!</h1>');
});

const server = http.createServer(app);
server.listen(5000); 