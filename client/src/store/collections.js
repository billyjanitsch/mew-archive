import {observable} from 'mobx'
import {find, range, random} from 'lodash'
import {Artist, Album} from '../models'
import {bandname} from '../utils'

export class CollectionStore {
  @observable artists = []
  @observable albums = []

  constructor() {
    range(100).forEach(() => {
      const artist = new Artist(this, {name: bandname(), image: 'http://google.com'})
      this.artists.push(artist)
      range(random(4)).forEach(() => {
        const album = new Album(this, {title: bandname()})
        this.albums.push(album)
      })
    })
  }

  resolveArtist = id => find(this.artists, ['id', id])
  resolveAlbum = id => find(this.albums, ['id', id])
}

const collections = new CollectionStore()
export default collections
