const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const user = require('./routes/user');
require('./models/user.model');
// app.use(express.static('public'));

const PORT = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/jwtauth', { useNewUrlParser: true }).then(
  ()=> console.log('connected to db')
).catch(
  (err)=> console.error(err)
);



app.get('/checking', function (req, res) {
  res.json({
    "Learning": "Defining the response that will be send to the client from this endpoint and test it via postman"
  });

});

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.use(require('./routes/user'));
// app.use('/user', user);
app.listen((process.env.PORT || PORT), function () {
  console.log('Server is running on Port ', PORT);
  console.log('**********************' + mongoose.connection.readyState);
});

