import express from require("express");
var cors = require('cors');

const app = express();

app.get("/", (request, response) => {

    response.json({"hello":"world"});

})

app.get('/products', cors(), function (req, res) {
    res.send('root')
  })

app.listen(8000, () => {
    console.log("server up and running");
});

const message = "express";