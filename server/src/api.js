import express from 'express'
import {Album, Artist, Track} from './models'

const guard = (req, res, next) =>
  Promise.resolve(next())
    .catch(error => {
      console.error(error) // eslint-disable-line
      res.sendStatus(500)
    })

const all = Model => async (req, res) =>
  res.send(await Model.fetchAll())

const one = Model => async (req, res) => {
  const model = await Model.forge({id: req.params.id})
  if (model) res.send(model)
  else res.sendStatus(404)
}

const albumsByArtist = async (req, res) =>
  res.send(await Artist.forge({id: req.params.id}).albums())

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

api.get('/play/:id', async (req, res) => {
  const track = await Track.forge({id: req.params.id}).fetch({columns: 'file'})
  if (track) res.sendFile(track.get('file'))
  else res.sendStatus(404)
})

api.get('*', (req, res) => res.sendStatus(400))

export default api
