import {computed, observable} from 'mobx'
import BaseModel from './BaseModel'

export default class Genre extends BaseModel {
  @observable name

  @computed get artists() {
    return this.store.artists.filter(['genre', this])
  }
}
