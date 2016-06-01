import {computed} from 'mobx'
import {filter, uniqueId} from 'lodash'

export default class Genre {
  constructor(store, genre) {
    this.store = store
    this.id = genre.id || uniqueId('genre-')
    this.name = genre.name
  }

  @computed get artists() {
    return filter(this.store.artists, ['genre', this])
  }

  toJS() {
    return {
      id: this.id,
      name: this.name,
    }
  }
}
