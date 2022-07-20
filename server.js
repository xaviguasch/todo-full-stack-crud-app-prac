// Declare variables
const express = require('express')
const app = express()
const PORT = 8500
const mongoose = require('mongoose')

const connectionString = `mongodb+srv://xaviguasch:${process.env.MONGODB_PASSWORD}@cluster0.fw77y.mongodb.net/ToDoTasks-Demo?retryWrites=true&w=majority`

require('dotenv').config()
// add model variable

// Set middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

mongoose.connect(connectionString, { useNewUrlParser: true }, () => {
  console.log('Connected to db!!!')
})

app.get('/', (req, res) => {
  res.send('hello!')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
})
