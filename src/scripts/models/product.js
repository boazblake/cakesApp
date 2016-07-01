'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//mongoose model
let ProductSchema = new Schema({
  imgLink:String,
  size: Number,
  name:String,
  uploadDate: Number,
  description:String,
  fileName:String
})


module.exports =  mongoose.model('Product', ProductSchema)