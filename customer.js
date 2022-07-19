const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Customer = mongoose.model('Customer', Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100
    },


email: {
    type: String,
    required: true ,
    maxlength: 100 
},

address: {
    type: String,
    required: true,  
},
phoneNumber: {
    type: String,
    maxlength: 13
},

age: {
    type: Number,
    min: 10
},

isActive: {
    type: Boolean,
    default: true
    
}



}))

module.exports = Customer;