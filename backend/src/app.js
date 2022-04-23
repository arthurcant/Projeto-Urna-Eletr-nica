const express = require('express')
const cors = require('cors')

const helmet = require('helmet')
const mustache = require('mustache-express')
const path = require("path")



const EleitorRoutes = require('./routes/EleitorRoutes') 
const CandidatoRoutes = require('./routes/CandidatoRoutes') 

const app = express()


app.use(express.json())
app.use(cors())
app.use(helmet())

app.set("view engine", "mustache")
app.set("views", path.join(__dirname, 'views'))
app.engine("mustache", mustache())

app.use(express.static(path.join(__dirname, '../../wwwroot')))


app.use('/', EleitorRoutes)
app.use('/candidato', CandidatoRoutes)

app.use((req, res) => {
    res.render("pages/404");
})

app.use(express.json())
app.use(cors())

module.exports = app 