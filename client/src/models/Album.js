import {computed, observable} from 'mobx'
import {sortBy, omit} from 'lodash'
import BaseModel from './BaseModel'

export default class Album extends BaseModel {
  @observable title
  @observable year
  @observable image = 'https://f4.bcbits.com/img/a0755689663_5.jpg'

  parse(data) {
    return {...omit(data, 'artist'), _artist: data.artist}
  }

  @computed get artist() {
    return this.store.artists.get(this._artist)
  }

  @computed get tracks() {
    return sortBy(this.store.tracks.filter(['album', this]), 'number')
  }
}
