const express = require('express')
const router = express.Router();
const Address = require('../model/models');

// create a route handler for /
router.post('/', (req, res) => {
    // grab the info we need from the request
    name = req.body.name,
    email = req.body.email,
    phone = req.body.phone,
    place = req.body.place

    let newAddress = new Address({
        name: name,
        email: email,
        phone: phone,
        place: place
    })

    newAddress.save().then((address) => {
        res.send(address)
    }).catch((err) => {
        console.log(error)
    })
})

module.exports = router;