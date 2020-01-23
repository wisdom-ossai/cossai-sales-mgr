const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');


const config = require("./environment");
const routes = require('../routes');

const app = express();

// logger
if (config.env === 'development') {
  app.use(logger('dev'))
};

// get dist directory
const frontendDirectory = path.join(__dirname, '../public');

//
app.use(express.static(frontendDirectory));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// for securing http calls and responses
app.use(helmet());

app.use(cors());

// api router
app.use('/api/', routes);

// serve the index.html
app.get('*', (req, res) => res.sendFile(path.join(frontendDirectory, 'index.html')));

module.exports = app;
