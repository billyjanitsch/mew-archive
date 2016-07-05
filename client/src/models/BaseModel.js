import {Model} from '../base'

export default class BaseModel extends Model {
  initialize() {
    if (!this.collection || !this.collection.store) {
      throw new Error('BaseModel requires a collection with a store.')
    }
    this.store = this.collection.store
  }
}
