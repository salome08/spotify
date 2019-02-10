import express from 'express'
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
const json = require('res-json');
const request = require('request');


/* eslint-disable no-console */

const port = process.env.PORT || 3001
const app = express()

const api = require('./routes/api')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({credentials: true}));

app.get('/', (req, res) => {
  res.send('hello world')
})

// mount routes
app.use('/api', api);

app.listen(port, err => {
  if (err) {
    console.error(err)
    process.exit(1)
  } else {
    console.log('Server listening: http://localhost:%s', port)
  }
})
