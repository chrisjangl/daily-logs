const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({extended: false}))
const Address = require('../model/models');
const logItem = require('../model/logItem');

router.post('/', (req,res) => {
    // Adding a User to AddressBook
    router.post('/', (req, res) => {
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
})

// create a route handler for /
router.post('/post-log', (req, res) => {
    // grab the info we need from the request
    date = req.body.date
    client = req.body.client
    project = req.body.project
    notes = req.body.notes
    tag = req.body.tag

    let newLogItem = new logItem({
        date: date,
        client: client,
        project: project,
        notes: notes,
        tag: tag,
    })

    newLogItem.save().then((logItem) => {
        res.send(logItem)
    }).catch((err) => {
        console.log(error)
    })
})

module.exports = router;