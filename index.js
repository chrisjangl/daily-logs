const express = require('express');

// initialize express app
const app = express();

// initalize our Object
const mongoose = require('mongoose');

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

// view engine setup
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

// index
app.get('/', (req, res) => {
    res.render('index')
})

// route to create new log
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