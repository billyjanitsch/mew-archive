import express from 'express'
import {Album, Artist, Track} from './models'

const guard = (req, res, next) =>
  Promise.resolve(next())
    .catch(error => {
      console.error(error) // eslint-disable-line
      res.sendStatus(500)
    })

const all = Model => (req, res) =>
  Model.fetchAll()
    .then(collection => res.send(collection.toJSON()))

const one = (Model, relations) => (req, res) =>
  Model.forge({id: req.params.id}).fetch({withRelated: relations})
    .then(model => model ? res.send(model.toJSON()) : res.sendStatus(404))

const api = express.Router() // eslint-disable-line

api.use(guard)

api.get('/artists', all(Artist))
api.get('/albums', all(Album))
api.get('/tracks', all(Track))

api.get('/artists/:id', one(Artist, ['albums', 'albums.tracks']))
api.get('/albums/:id', one(Album, ['tracks']))
api.get('/track/:id', one(Track))

api.get('/play/:id', (req, res) => {
  Track.forge({id: req.params.id}).fetch({columns: 'file'})
    .then(track => track ? res.sendFile(track.get('file')) : res.sendStatus(404))
})

api.get('*', (req, res) => res.sendStatus(400))

export default api
