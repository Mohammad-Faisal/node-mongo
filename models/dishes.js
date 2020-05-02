const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
},{
    timestamps: true  //this will automatically ad created_at and updated_at fields
});

var Dishes = mongoose.model('Dish', dishSchema); // here we use the name Dish schema which will
// create a new collection named dishes automatically

module.exports = Dishes;