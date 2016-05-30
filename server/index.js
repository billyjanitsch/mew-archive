const express = require('express')
const bandname = require('./utils/bandname')
const _ = require('lodash')

const DUMMY_IMAGE = 'http://s3.amazonaws.com/assets.prod.vetstreet.com/5f/6a6480239a11e28836005056ad4734/file/bella-kitten-137199440.jpg'

const MOCK_ARTISTS = _.range(100).map(() => ({
  id: _.uniqueId('artist_'),
  name: bandname(),
  image: DUMMY_IMAGE,
}))

const MOCK_ALBUMS = _.flatten(MOCK_ARTISTS.map(artist =>
  _.range(_.random(1, 5)).map(() => ({
    id: _.uniqueId('album_'),
    title: bandname(),
    artist: artist.id,
    image: DUMMY_IMAGE,
  }))
))

const api = express.Router()

api.get('/artists', (req, res) => {
  res.send(MOCK_ARTISTS)
})

api.get('/albums', (req, res) => {
  res.send(MOCK_ALBUMS)
})

module.exports = api
