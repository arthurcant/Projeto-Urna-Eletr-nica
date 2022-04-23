const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const EleitorRoutes = require('./routes/EleitorRoutes') 
const CandidatoRoutes = require('./routes/CandidatoRoutes') 

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use('/', EleitorRoutes)
app.use('/candidato', CandidatoRoutes)

module.exports = app 