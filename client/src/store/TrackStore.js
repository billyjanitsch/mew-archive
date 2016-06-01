import {observable, computed, action, map} from 'mobx'
import {Track} from '../models'
import api from '../api'

export default class TrackStore {
  @observable _collection = map()

  constructor(store) {
    this.collections = store
    this.fetchAll()
  }

  @computed get all() {
    return this._collection.values()
  }

  get = id => this._collection.get(id)

  @action set(tracks) {
    tracks.forEach(track => {
      if (!this._collection.has(track.id)) {
        this._collection.set(track.id, new Track(this, track))
      }
    })
  }

  async fetchAll() {
    const tracks = await api('tracks')
    this.set(tracks)
  }
}
