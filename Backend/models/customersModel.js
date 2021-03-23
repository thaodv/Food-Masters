const mongoose = require('mongoose');

// Schema

let customers = mongoose.model('customers', {
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    address: { type: String },
    city: { type: String },
    country: { type: String },
    image: { type: String },
    password: { type: String },
})

module.exports = { customers };