const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;
const mongoose = require('mongoose');

let { foodMenus } = require('../models/foodMenusModel');

mongoose.set('useFindAndModify', false);

// read

router.get('/', (req, res) => {
    foodMenus.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error: ' + JSON.stringify(err, undefined, 2));
    });
})

router.get('/singlemenu', (req, res) => {
    let query = req.query.name;
    foodMenus.findOne({ name: query }, (err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error: ' + JSON.stringify(err, undefined, 2));
    });
})

router.get('/delete', (req, res) => {

    let resname = req.query.resname;

    foodMenus.findOne({ name: resname }, (err, docs) => {
        if (!err) {
            res.send(docs);
            docs.remove();
        }
        else {
            console.log('Error: ' + JSON.stringify(err, undefined, 2));
        }
    })
})

// create

router.post('/', (req, res) => {
    let newFoodMenu = new foodMenus({
        name: req.body.name,
        menu: req.body.menu
    });

    newFoodMenu.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error: ' + JSON.stringify(err, undefined, 2));
    });
})

// update

router.put('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('No record with given id: ' + req.params.id);
    }
    else {
        let updatedFoodMenus = {
            name: req.body.name,
            menu: req.body.menu
        }

        foodMenus.findByIdAndUpdate(req.params.id, { $set: updatedFoodMenus }, { new: true },
            (err, docs) => {
                if (!err) res.send(docs);
                else console.log('Error: ' + JSON.stringify(err, undefined, 2))
            });
    }
});

// delete 

router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return req.status(400).send('No record with given id: ' + req.params.id);
    }
    else {
        foodMenus.findByIdAndDelete(req.params.id,
            (err, docs) => {
                if (!err) res.send(docs);
                else console.log('Error: ' + JSON.stringify(err, undefined, 2))
            });
    }
})

module.exports = router;