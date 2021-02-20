const mongoose = require('mongoose');

// schema for AddressBook
const noteSchema = mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: false
    },
    project: {
        type: String,
        required: false
    },
    notes: {
        type: String,
        required: false
    },
    tag: {
        type: String,
        required: false
    }
})

// creating the collection 
const logItem = mongoose.model('logs', noteSchema);

module.exports = logItem;