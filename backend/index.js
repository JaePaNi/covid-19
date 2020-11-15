const express = require('express');
const app = express();

const api = require('./openApi');

app.use('/openapi', api);

// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage');
    console.log('index page in');
});

app.listen(5000, () => {
    console.log("Server on!!!");
});