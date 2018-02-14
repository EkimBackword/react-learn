'use strict';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import session = require('express-session');
import expressValidator = require('express-validator');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const url = 'http://localhost';
const port = 35123;


/* Create Server */

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors({ credentials: true, origin: true }));
app.use(session({
    secret: 'keyboard_cat',
    resave: false,
    saveUninitialized: true,
    cookie: { httpOnly: true }
}));

import * as passport from 'passport';
import './authentication';

app.use(passport.initialize());
app.use(passport.session());

import { UserController } from './controllers/user.controller';

new UserController(app);

mongoose.connect('mongodb://127.0.0.1:27017/test');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  app.listen(port, () => {
      console.log(('  App is running at http://localhost:%d'), port);
      console.log('  Press CTRL-C to stop\n');
  });
});