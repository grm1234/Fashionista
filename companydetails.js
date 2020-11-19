//const Product = require('../models/product.js');
const mongoose = require('mongoose'), Schema = mongoose.Schema;

const CompanyDetailsSchema = mongoose.Schema({
    _id:String,
    name: String
});

module.exports = mongoose.model('CompanyDetails', CompanyDetailsSchema);