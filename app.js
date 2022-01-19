var createError = require('http-errors');
var express = require('express');
var path = require('path');
const assert = require('assert');
var cookieParser = require('cookie-parser');
const MongoClient = require('mongodb').MongoClient;
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');

const corsOptions = {
  origin: true,
  credentials: true
};

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');



app.options('*', cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
const checkAddress=async (client,address)=>{
  const result = await  client.findOne({bep20:address});
  if(result){
      return true
  }
  else{return false}
}


var client1 ;
MongoClient.connect(
'mongodb+srv://test:hello@cluster0.ufjup.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-j9lkc8-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',
{ useNewUrlParser: true, useUnifiedTopology: true },
 function(connectErr, client) {
  assert.equal(null, connectErr);
  const coll = client.db('list').collection('users');
 client1=coll;
});
//connecting to the list database

app.get("/", (req, res) =>{
res.send("Nothing");
});
app.get("/api/:address",  async function (req, res) {
 
if (req.params.address.length < 10) {
  res.send("Invalid address");
} else {
    check = await checkAddress(client1,req.params.address)
  if(check)
  {
      res.json({isPresent:true})
    
  }
  else{
      res.json({isPresent:false})
  }
  
}
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
