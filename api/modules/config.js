const express = require('express')
const consign = require('consign')
const cors = require('cors')

var app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

consign()
    .include('modules/routes.js')
        .then('src/controllers')
        .into(app)

module.exports = app