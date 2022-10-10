const mongoose = require('mongoose')

const Schema = mongoose.Schema

const processSchema = new Schema ({
    source: {
        type: String,
        required: true
    },
    target: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required : true
    }
})

const Process = mongoose.model('Process', processSchema)

module.exports = Process