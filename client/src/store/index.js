import {observable} from 'mobx'
import collections from './collections'
import {Player} from '../models'

export default class Store {
  @observable player = new Player()
  @observable collections = collections

  resolveArtist = this.collections.resolveArtist
  resolveAlbum = this.collections.resolveAlbum
}
