const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;

let { orders } = require('../models/ordersModels');


router.get('/', (req, res) => {
    orders.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error: ' + JSON.stringify(err, undefined, 2));
    });
})

router.get('/user', (req, res) => {
    let query = req.query.name;
    orders.find({ name: query }, (err, docs) => {
        if (!err) res.send(docs);
        else res.send('Error: ' + JSON.stringify(err, undefined, 2));
    });
})

router.get('/seller', (req, res) => {
    let query = req.query.restuarant;
    orders.find({ restuarant: query }, (err, docs) => {
        if (!err) res.send(docs);
        else res.send('Error: ' + JSON.stringify(err, undefined, 2));
    });
})


router.post('/', (req, res) => {

    let newOrder = new orders({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        restuarant: req.body.restuarant,
        order: req.body.order,
        amount: req.body.amount,
        paymentmethod: req.body.paymentmethod,
        paymentid: req.body.paymentid,
        time: req.body.time,
        status: req.body.status
    })

    newOrder.save((err, docs) => {
        if (!err) res.send(docs);
        else res.send('Error: ' + JSON.stringify(err, undefined, 2))
    })
});


router.put('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('No record with given id: ' + req.params.id);
    }
    else {
        let updatedOrder = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            city: req.body.city,
            country: req.body.country,
            restuarant: req.body.restuarant,
            order: req.body.order,
            amount: req.body.amount,
            paymentmethod: req.body.paymentmethod,
            paymentid: req.body.paymentid,
            time: req.body.time,
            status: req.body.status
        }

        orders.findByIdAndUpdate(req.params.id, { $set: updatedOrder }, { new: true },
            (err, docs) => {
                if (!err) res.send(docs);
                else console.log('Error: ' + JSON.stringify(err, undefined, 2))
            });
    }
});



router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return req.status(400).send('No record with given id: ' + req.params.id);
    }
    else {
        orders.findByIdAndDelete(req.params.id,
            (err, docs) => {
                if (!err) res.send(docs);
                else res.send('Error: ' + JSON.stringify(err, undefined, 2))
            });
    }
})

module.exports = router;

