const http = require('http');
const express = require('express');
const app = express();
const PORT = 3000;
const server = http.createServer(app);
const morgan = require('morgan');
const logger = morgan('tiny');
const helmet = require('helmet');

app.use(logger);
app.use(helmet());

// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next(); // sending signal to express telling it that this middleware is done.
// });

app.get('/', (req, res, next) => {
    res.send('<h1>Hooray it is the home page!!</h1>');
    // next();
    // Be careful, because we are sending the response. 
    // If the next middleware tries to send the response, we will get an error.
});



server.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
})