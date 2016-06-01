import {observable, computed, action, map} from 'mobx'
import {Genre} from '../models'
import api from '../api'

export default class GenreStore {
  @observable _collection = map()

  constructor(store) {
    this.collections = store
    this.fetchAll()
  }

  @computed get all() {
    return this._collection.values()
  }

  get = id => this._collection.get(id)

  @action set(genres) {
    genres.forEach(genre => {
      if (!this._collection.has(genre.id)) {
        this._collection.set(genre.id, new Genre(this, genre))
      }
    })
  }

  async fetchAll() {
    const genres = await api('genres')
    this.set(genres)
  }
}
