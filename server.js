const express = require('express');
const mustacheExpress = require('mustache-express');
const mongoose = require('mongoose');
const app = express()
const pkdRoutes = require('./routes/routes');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));

const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null;

app.engine('mustache', mustacheExpressInstance);

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use('/', pkdRoutes)

app.use(express.static('public'));

let url = 'mongodb://localhost:27017/moreMongoose';

mongoose.connect(url, { useMongoClient: true })
  .then(function() {
    console.log('Connected to the database');
  });

app.listen(3000, function() {
  console.log('listening on MST3000')
});
