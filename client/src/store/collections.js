import {observable} from 'mobx'
import {find, range, random} from 'lodash'
import {Artist, Album} from '../models'
import {bandname} from '../utils'

const DUMMY_IMAGE = 'http://s3.amazonaws.com/assets.prod.vetstreet.com/5f/6a6480239a11e28836005056ad4734/file/bella-kitten-137199440.jpg'

export class CollectionStore {
  @observable artists = []
  @observable albums = []

  constructor() {
    range(100).forEach(() => {
      const artist = new Artist(this, {name: bandname(), image: DUMMY_IMAGE})
      this.artists.push(artist)
      range(random(1, 5)).forEach(() => {
        const album = new Album(this, {title: bandname(), artist: artist.id, image: DUMMY_IMAGE})
        this.albums.push(album)
      })
    })
  }

  resolveArtist = id => find(this.artists, ['id', id])
  resolveAlbum = id => find(this.albums, ['id', id])
}

const collections = new CollectionStore()
export default collections
