const http = require('http');
const express = require('express');
const app = express();
const PORT = 3000;
const server = http.createServer(app);

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // sending signal to express telling it that this middleware is done.
});

app.get('/', (req, res) => {
    res.send('<h1>Hooray it is the home page!!</h1>')
});



server.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
})