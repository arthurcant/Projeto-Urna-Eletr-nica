const mongoose = require('../db/connect')
const Schema = mongoose.Schema

const Candidatos = mongoose.model(
    'Candidatos',
    new Schema({
        name: {
            type: String,
            required: true
        },
        matricula:{
            type: String,
            required: true
        },
        numberForVote:{
            type: Number,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        votes:{
            type: Array,
            required: true,
            default: []
        }
        
    }, { timestamps: true })
)

module.exports = Candidatos