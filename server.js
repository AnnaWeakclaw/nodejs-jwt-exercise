const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;

const mongoose = require('mongoose');

app.listen(PORT, function () {
  console.log('Server is running on Port ', PORT);
});

app.get('/checking', function (req, res) {
  res.json({
    "Learning": "Defining the response that will be send to the client from this endpoint and test it via postman"
  });

});

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json);

