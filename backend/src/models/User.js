const mongoose = require('../db/connect')
const Schema = mongoose.Schema

const User = mongoose.model(
    'User',
    new Schema({
        name: {
            type: String,
            required: true
        },
        
    }, { timestamps: true })
)

module.exports = User