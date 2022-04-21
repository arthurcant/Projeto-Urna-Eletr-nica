const express = require('express')
const cors = require('cors')

const UserRoutes = require('./routes/UserRoutes') 

const app = express()

app.use(express.json())
app.use(cors())

app.use('/users', UserRoutes)

module.exports = app 