import {keyBy, range, uniqueId, sample} from 'lodash'
import {bandname} from '../utils'

const MOCK_ARTISTS = range(50).map(() => ({
  id: uniqueId(),
  name: bandname(),
  image: 'http://s3.amazonaws.com/assets.prod.vetstreet.com/5f/6a6480239a11e28836005056ad4734/file/bella-kitten-137199440.jpg',
}))

const MOCK_ALBUMS = range(100).map(() => ({
  id: uniqueId(),
  artist: sample(MOCK_ARTISTS).id,
  title: bandname(),
  image: 'http://s3.amazonaws.com/assets.prod.vetstreet.com/5f/6a6480239a11e28836005056ad4734/file/bella-kitten-137199440.jpg',
}))

const INITIAL_STATE = {
  artists: keyBy(MOCK_ARTISTS, 'id'),
  albums: keyBy(MOCK_ALBUMS, 'id'),
  tracks: {},
  genres: {},
  playlists: {},
}

export default (state = INITIAL_STATE, action) => {
  if (action.entities) return {...state, ...action.payload}
  return state
}
