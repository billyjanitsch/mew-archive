import {computed} from 'mobx'
import {filter} from 'lodash'

export default class Genre {
  constructor(store, genre) {
    this.store = store
    this.id = genre.id
    this.name = genre.name
  }

  @computed get artists() {
    return filter(this.store.collections.artists.all, ['genre', this])
  }

  toJS() {
    return {
      id: this.id,
      name: this.name,
    }
  }
}
