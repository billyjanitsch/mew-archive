import {observable} from 'mobx'
import {assign} from 'lodash'
import api from '../api'

export default class Model {
  static defaults = {}

  @observable id
  collection

  initialize() {}

  constructor(attrs = {}, options = {}) {
    let attributes = {...this.constructor.defaults, ...attrs}
    if (options.parse) attributes = this.parse(attributes)
    assign(this, attributes)
    if (options.collection) this.collection = options.collection
    this.initialize(attrs, options)
  }

  parse(data) {
    return data
  }

  async fetch() {
    const url = `${this.collection.url}/${this.id}`
    const data = this.parse(await api(url))
    assign(this, data)
  }
}
