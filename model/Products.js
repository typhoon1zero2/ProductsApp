/********************************
 *  IMPORT DEPENDENCIES
 ********************************/
const mongoose = require('mongoose');
const { Schema , model } = mongoose;

/********************************
 * PRODUCTS SCHEMA
 *******************************/
const productSchema = new Schema({
    name: String,
    description: String,
    image: String,
    price: Number,
    qty: Number,
    isQuality: Boolean
})
/******************************
 * MAKE PRODUCTS MODEL
 ******************************/
const Product = model("Product", productSchema);

/*****************************
 * EXPORT MODEL
 ****************************/
module.exports = Product;

/***************************
 * PRODUCTS IN THE MONGODB
 **************************/
