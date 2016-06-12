import express from 'express'
import {Album, Artist, Track} from './models'

const guard = (req, res, next) =>
  Promise.resolve(next())
    .catch(error => {
      console.error(error) // eslint-disable-line
      res.sendStatus(500)
    })

const all = Model => (req, res) =>
  Model.fetchAll().then(::res.send)

const one = Model => (req, res) =>
  Model.forge({id: req.params.id})
    .then(model => model ? res.send(model) : res.sendStatus(404))

const albumsByArtist = (req, res) =>
  Artist.forge({id: req.params.id}).albums()
    .then(::res.send)

const api = express.Router() // eslint-disable-line

api.use(guard)

api.get('/artists', all(Artist))
api.get('/albums', all(Album))
api.get('/tracks', all(Track))

api.get('/artists/:id', one(Artist))
api.get('/artists/:id/albums', albumsByArtist)
api.get('/artists/:id/genres', one(Artist))

api.get('/albums/:id', one(Album))
api.get('/albums/:id/tracks', one(Album))

api.get('/tracks/:id', one(Track))

api.get('/play/:id', (req, res) => {
  Track.forge({id: req.params.id}).fetch({columns: 'file'})
    .then(track => track ? res.sendFile(track.get('file')) : res.sendStatus(404))
})

api.get('*', (req, res) => res.sendStatus(400))

export default api
