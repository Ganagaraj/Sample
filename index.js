var express = require('express');
var axios = require('axios')
var parse = require('body-parser');
var app = express();

app.get('/', (req, res) => {
    res.send('<h1>Ganagaraj says hi</h1>')
})

app.listen(3000, () => {
    console.log("im listening at 3000")
})