const mongoose = require('mongoose');

let orders = mongoose.model('orders', {
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    address: { type: String },
    city: { type: String },
    country: { type: String },
    restuarant: { type: String },
    order: { type: Array },
    amount: { type: String },
    paymentmethod: { type: String },
    paymentid: { type: String },
    time: { type: String },
    status: { type: String }
});

module.exports = { orders };