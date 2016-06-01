import {observable, action, computed, map} from 'mobx'
import {Artist} from '../models'
import api from '../api'

export default class ArtistStore {
  @observable _collection = map()

  constructor(store) {
    this.collections = store
    this.fetchAll()
  }

  @computed get all() {
    return this._collection.values()
  }

  get = id => this._collection.get(id)

  @action set(artists) {
    artists.forEach(artist => {
      if (!this._collection.has(artist.id)) {
        this._collection.set(artist.id, new Artist(this, artist))
      }
    })
  }

  async fetchAll() {
    const artists = await api('artists')
    this.set(artists)
  }
}
