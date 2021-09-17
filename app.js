var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var linksRouter = require('./routes/links');
var cohorts = require('./routes/cohorts');
var students = require('./routes/students');
var attendance = require('./routes/attendance');
var authRouter = require('./routes/auth');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', authRouter); 
app.use('/links', linksRouter);
app.use('/cohorts', cohorts);
app.use('/students', students);
app.use('/attendance', attendance);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
  
module.exports = app;
