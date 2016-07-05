import {computed, observable} from 'mobx'
import BaseModel from './BaseModel'

export default class Artist extends BaseModel {
  @observable name
  @observable image = 'http://assets0.thefourohfive.com/data/9928/feature/ttng1.jpeg'

  @computed get sortName() {
    return this.name.replace(/^(The|A) /g, '')
  }

  @computed get genre() {
    return this.store.genres.get(this._genre)
  }

  @computed get tracks() {
    return this.store.tracks.filter(['artist', this])
  }

  @computed get albums() {
    return this.store.albums.filter(['artist', this])
  }
}
