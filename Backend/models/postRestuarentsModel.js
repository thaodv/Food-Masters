const mongoose = require('mongoose');

// Schema

let postRestuarents = mongoose.model('restuarents', {
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    location: { type: String },
    image: { type: String },
    password: { type: String },
    isSeller: { type: Boolean }
})

module.exports = { postRestuarents };