// Declare variables
const express = require('express')
const app = express()
const PORT = 8500
const mongoose = require('mongoose')

require('dotenv').config()
// add model variable

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
})
