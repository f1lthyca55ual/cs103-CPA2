const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var blogSchema = new Schema({
  First_Name:  String, // String is shorthand for {type: String}
  Last_Name: String,
  Title: String,
  Elo:   Number,
  Country: String,
});

module.exports = mongoose.model( 'Schema', blogSchema );