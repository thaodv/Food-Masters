const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const ObjectID = require('mongoose').Types.ObjectId;

let { customers } = require('../models/customersModel');


router.get('/', (req, res) => {
    customers.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error: ' + JSON.stringify(err, undefined, 2));
    });
});


router.post('/', (req, res) => {

    let newCustomer = new customers({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        image: req.body.image,
        password: req.body.password,
    });

    newCustomer.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error: ' + JSON.stringify(err, undefined, 2));
    });
});


router.post('/login', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    customers.find((err, docs) => {
        if (err) {
            console.log('Error: ' + JSON.stringify(err, undefined, 2));
        }
        else {
            if (docs.length <= 0) {
                let userInfo = {
                    auth: false,
                    message: "No User Exists..."
                }
                res.send(userInfo);;
            }
            else {
                let userFound = false;
                let user = {};
                for (let i = 0; i < docs.length; i++) {
                    if (docs[i].email == email && docs[i].password == password) {
                        userFound = true;
                        user = docs[i];
                        break;
                    }
                }
                if (userFound === true) {
                    const id = user._id;

                    const token = jwt.sign({ id }, "jwtSecret", {
                        expiresIn: 1000
                    });

                    let userInfo = {
                        auth: true,
                        token: token,
                        result: user
                    }
                    res.send(userInfo);
                }
                else {
                    let userInfo = {
                        auth: false,
                        message: "Wrong Username/Password"
                    }
                    res.send(userInfo);;
                }
            }
        }
    });
});

module.exports = router;