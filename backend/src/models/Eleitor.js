const mongoose = require('../db/connect')
const Schema = mongoose.Schema

const Eleitor = mongoose.model(
    'Eleitor',
    new Schema({
        name: {
            type: String,
            required: true
        },
        matricula:{
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        alreadyVoted: {
            type: Boolean,
            required: true,
            default: false
        }
        
    }, { timestamps: true })
)

module.exports = Eleitor