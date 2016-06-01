import {observable, action, transaction} from 'mobx'
import {find} from 'lodash'
import {Artist, Album, Genre} from '../models'
import api from '../api'

export class CollectionStore {
  @observable genres = []
  @observable artists = []
  @observable albums = []

  constructor() {
    // todo: this doesn't belong here
    this.fetchAll()
  }

  resolveGenre = id => find(this.genres, ['id', id])
  resolveArtist = id => find(this.artists, ['id', id])
  resolveAlbum = id => find(this.albums, ['id', id])

  @action async fetchAll() {
    const [artists, albums] = [await api('artists'), await api('albums')]
    transaction(() => {
      this.artists = artists.map(artist => new Artist(this, artist))
      this.albums = albums.map(album => new Album(this, album))
    })
  }
}

const collections = new CollectionStore()
export default collections
