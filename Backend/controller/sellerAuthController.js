const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];

    if (!token) {
        res.send("Yoo, we need a token to get you in...");
    }
    else {
        jwt.verify(token, "jwtSecret", (err, decoded) => {
            if (err) {
                let userInfo = {
                    auth: false,
                    message: "You failed to authenticate"
                }
                res.send(userInfo);
            }
            else {
                req.userId = decoded.id;
                next();
            }
        })
    }
}


router.get('/', verifyJWT, (req, res) => {
    let authInfo = {
        isAuth: true
    }

    res.send(authInfo);
})

module.exports = router;