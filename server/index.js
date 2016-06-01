const express = require('express')
const bandname = require('./utils/bandname')
const _ = require('lodash')

const DUMMY_IMAGE = 'http://s3.amazonaws.com/assets.prod.vetstreet.com/5f/6a6480239a11e28836005056ad4734/file/bella-kitten-137199440.jpg'

const GENRES = _.range(10).map(() => ({
  id: _.uniqueId('genre_'),
  name: bandname(),
}))

const ARTISTS = _.range(3000).map(() => ({
  id: _.uniqueId('artist_'),
  name: bandname(),
  genre: _.sample(GENRES).id,
  image: DUMMY_IMAGE,
}))

const ALBUMS = _.flatten(ARTISTS.map(artist =>
  _.range(_.random(1, 3)).map(() => ({
    id: _.uniqueId('album_'),
    title: bandname(),
    artist: artist.id,
    date: _.random(1980, 2016),
    image: DUMMY_IMAGE,
  }))
))

const TRACKS = _.flatten(ALBUMS.map(album =>
  _.range(_.random(3, 20)).map(n => ({
    id: _.uniqueId('track_'),
    title: bandname() + ' ' + bandname(),
    number: n,
    album: album.id,
    artist: album.artist,
  }))
))

const api = express.Router()

api.get('/genres', (req, res) => {
  res.send(GENRES)
})

api.get('/artists', (req, res) => {
  res.send(ARTISTS)
})

api.get('/albums', (req, res) => {
  res.send(ALBUMS)
})

api.get('/tracks', (req, res) => {
  res.send(TRACKS)
})

module.exports = api
