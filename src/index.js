const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/cookbook', { useNewUrlParser: true })

const app = express()
app.listen(3000)

app.get('/', (req, res) => res.send('Hi!'))
app.get('/recipes', (req, res) => res.send([
  {
    title: 'Картофан',
    description: 'Жареный'
  }
]))