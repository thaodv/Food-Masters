const mongoose = require('mongoose');

const databaseUrl = 'mongodb+srv://swapnilaanam:78264@food-delivery-service.s28eq.mongodb.net/food_delivery_service?retryWrites=true&w=majority'

mongoose.connect(databaseUrl, {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
    if(!err) {
        console.log('Mongodb connected successfully...');
    } else {
        console.log('Error: ' + JSON.stringify(err, undefined, 2) );
    }
})