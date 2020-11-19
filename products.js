//const Product = require('../models/product.js');
const mongoose = require('mongoose'), Schema = mongoose.Schema;

const ProductSchema = mongoose.Schema({
    _id:Number,
    type:String,
    company:String,
    pname:String,
    desc:String,
    img:String,
    price:Number
});

module.exports = mongoose.model('Product', ProductSchema);