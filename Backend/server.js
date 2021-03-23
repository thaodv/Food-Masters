require('./database.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// API

let postRestuarentsRoute = require('./controller/postRestuarentsController');
let foodMenusRoute = require('./controller/foodMenusController');
let sellerAuthRoute = require('./controller/sellerAuthController');
let customersRoute = require('./controller/customersController');
let ordersRoute = require('./controller/ordersController');


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.listen(4000, () => console.log('Server up and running...'));


// routes

app.use('/isSellerAuth', sellerAuthRoute);
app.use('/postRestuarents', postRestuarentsRoute);
app.use('/foodMenus', foodMenusRoute);
app.use('/users', customersRoute);
app.use('/orders', ordersRoute);

