const express = require('express');
const app = express();

const api = require('./openapi');

app.use('/openapi', api);

app.get('/', function (req, res) {
    res.send('GET request to the homepage');
    console.log('index page in');
});

app.get('/test', (req, res)=>{
   const id = req.query.id;
   console.log(id);
   res.send(id);
});

app.listen(5000, () => {
    console.log("Server on!!!");
});