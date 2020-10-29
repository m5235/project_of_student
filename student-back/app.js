var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const cors =require ('cors');
const bodyParser = require('body-parser');


const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27018/pfa", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => {
    console.log("Connected to database");
}).catch(() => {
    console.log("Connection Failed");
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const errorHandler = require('./_helpers/errorHandler');
app.use(errorHandler);
var usersRouter = require('./routes/users');
app.use('/users', usersRouter);
const createError = require('http-errors');

// catch 404 and forward to error handler.
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(5000, () => {
    console.log("Server has started!")
})

module.exports = app;