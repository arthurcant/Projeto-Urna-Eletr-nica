const mongoose = require('../db/connect')
const Schema = mongoose.Schema

const Eleitor = mongoose.model(
    'Eleitor',
    new Schema({
        name: {
            type: String,
            required: true
        },
        
    }, { timestamps: true })
)

module.exports = Eleitor