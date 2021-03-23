const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const ObjectID = require('mongoose').Types.ObjectId;

let { postRestuarents } = require('../models/postRestuarentsModel');


router.get('/', (req, res) => {
    postRestuarents.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error: ' + JSON.stringify(err, undefined, 2));
    });
})


router.get('/singlerestuarant', (req, res) => {
    let query = req.query.name;
    postRestuarents.findOne({ name: query }, (err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error: ' + JSON.stringify(err, undefined, 2));
    });
})


router.post('/', (req, res) => {

    let newRestuarent = new postRestuarents({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        location: req.body.location,
        image: req.body.image,
        password: req.body.password,
        isSeller: true
    });

    newRestuarent.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error: ' + JSON.stringify(err, undefined, 2));
    });

});


router.post('/login', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    postRestuarents.find((err, docs) => {
        if (err) {
            console.log('Error: ' + JSON.stringify(err, undefined, 2));
        }
        else {
            if (docs.length <= 0) {
                let userInfo = {
                    auth: false,
                    message: "No User Exists.."
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

router.put('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return req.status(400).send('No record with given id: ' + req.params.id);
    } else {
        let updatedRestuarent = {
            name: req.body.name,
            location: req.body.location,
            description: req.body.description,
            image: req.body.image
        }

        postRestuarents.findByIdAndUpdate(req.params.id, { $set: updatedRestuarent }, { new: true },
            (err, docs) => {
                if (!err) res.send(docs);
                else console.log('Error: ' + JSON.stringify(err, undefined, 2))
            });
    }
})

router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return req.status(400).send('No record with given id: ' + req.params.id);
    }
    else {
        postRestuarents.findByIdAndDelete(req.params.id,
            (err, docs) => {
                if (!err) res.send(docs);
                else console.log('Error: ' + JSON.stringify(err, undefined, 2))
            });
    }
})

module.exports = router;