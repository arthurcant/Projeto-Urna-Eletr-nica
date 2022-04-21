const express = require('express')
const cors = require('cors')

const EleitorRoutes = require('./routes/EleitorRoutes') 

const app = express()

app.use(express.json())
app.use(cors())

app.use('/eleitor', EleitorRoutes)

module.exports = app 