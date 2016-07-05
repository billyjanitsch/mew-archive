import {computed, observable} from 'mobx'
import BaseModel from './BaseModel'

export default class Track extends BaseModel {
  @observable title
  @observable number
  @observable disk

  @computed get artist() {
    return this.store.artists.get(this._artist)
  }

  @computed get album() {
    return this.store.albums.get(this._album)
  }
}
