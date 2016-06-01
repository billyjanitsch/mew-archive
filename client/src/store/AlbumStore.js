import {observable, computed, action, map} from 'mobx'
import {Album} from '../models'
import api from '../api'

export default class AlbumStore {
  @observable _collection = map()

  constructor(store) {
    this.collections = store
    this.fetchAll()
  }

  @computed get all() {
    return this._collection.values()
  }

  get = id => this._collection.get(id)

  @action set(albums) {
    albums.forEach(album => {
      if (!this._collection.has(album.id)) {
        this._collection.set(album.id, new Album(this, album))
      }
    })
  }

  async fetchAll() {
    const albums = await api('albums')
    this.set(albums)
  }
}
