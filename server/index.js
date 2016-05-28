const express = require('express')

const api = express.Router()

api.get('/artists', (req, res) => {
  res.send([{id: 1, name: 'hi'}])
})

api.get('/albums', (req, res) => {
  res.send([{id: 2, title: 'lol', artist: 1}])
})

module.exports = api
