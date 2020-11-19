//const Product = require('../models/product.js');
const mongoose = require('mongoose'), Schema = mongoose.Schema;

const CustomerSchema = mongoose.Schema({
    _id:Number,
    username: String,
    password:String
});

module.exports = mongoose.model('Customer', CustomerSchema);