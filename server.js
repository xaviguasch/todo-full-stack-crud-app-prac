// Declare variables
const express = require('express')
const app = express()
const PORT = 8500
const mongoose = require('mongoose')

// Set middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

require('dotenv').config()

const TodoTask = require('./models/TodoTask')

//Connect to Mongo
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log('Connected to db!')
})
// GET METHOD
app.get('/', async (req, res) => {
  try {
    TodoTask.find({}, (err, tasks) => {
      res.render('index.ejs', { todoTasks: tasks })
    })
  } catch (err) {
    if (err) return res.status(500).send(err)
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
})
