const express = require('express');

// initialize express app
const app = express();

// initalize our Object
const mongoose = require('mongoose');

// get the Address model
const Address = require('./model/models')

// get the Log model
const logItem = require('./model/logItem')

// connect to DB
mongoose.connect('mongodb://localhost:27017/dailyLogs',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to DB');
    })
    .catch((error) => {
        console.log(error)
    });

// this lets us parse the request for form data
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Adding a User to AddressBook
app.post('/', (req, res) => {
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
    }).catch((error) => {
     console.log(error)
    })
})

app.post('/logs/create', (req, res) => {
    date = req.body.date,
    client = req.body.client,
    project = req.body.project,
    notes = req.body.notes,
    tag = req.body.tag

    // create an object based on the DB model we created in model/logItem.js
    let newLogItem = new logItem({
        date: date,
        client: client,
        project: project,
        notes: notes,
        tag: tag
    })


    newLogItem.save().then((logItem) => {
        res.send(logItem)
    }).catch((error) => {
        console.log(error)
    })
})

// initialize the server
app.listen(3000, () => {
    console.log('server listening on port: 3000');
})