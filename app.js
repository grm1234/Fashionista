/*//load modules
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var port = 5000;

//db url details
var url = "mongodb://localhost:27017/angularauth";

//create reference of express
var app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//db connection
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});

//connect to db
mongoose.connection;

//code
var Product = require("./router/product.router");

//middleware
app.use("/shop",Product);
//app.use("/customer",Customer);

app.listen(port,()=>console.log("Server running on " +port));*/
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./DB');
//const userRoute = require('./routes/UserRoute');

const PORT = process.env.PORT || 5000;

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(config.DB).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let corsOptions = {
  origin: 'http://localhost:4200', //['http://localhost:4200','http://localhost:4300']
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
//app.use('/api/users', userRoute);
//require('./routes/companyRoute.js')(app);
require('./router/customer.router.js')(app);
require('./router/product.router.js')(app);
//require('./routes/companydetailsRoute.js')(app);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});