import {assign, countBy, every, filter, find, findLast, forEach, groupBy, includes, keyBy, map,
  mapValues, orderBy, partition, reduce, reject, sample, sampleSize, shuffle, some, sortBy}
  from 'lodash'
import {map as observableMap, computed} from 'mobx'
import api from '../api'
import Model from './Model'

const PROXY_METHODS = {
  countBy,
  every,
  filter,
  find,
  findLast,
  forEach,
  groupBy,
  includes,
  keyBy,
  map,
  orderBy,
  partition,
  reduce,
  reject,
  sample,
  sampleSize,
  shuffle,
  some,
  sortBy,
}

export default class Collection {
  _byId = observableMap()
  url = ''
  Model = Model

  constructor(models, options = {}) {
    assign(this, mapValues(PROXY_METHODS, method =>
      (...args) => method(this.models, ...args)
    ))
    this.initialize(models, options)
    if (models) this.reset(models)
  }

  initialize() {}

  @computed get models() {
    return this._byId.values()
  }

  async fetch() {
    return this.reset(await api(this.url))
  }

  get(id) {
    return this._byId.get(id)
  }

  has(id) {
    return this._byId.has(id)
  }

  reset(models) {
    return this.set(models)
  }

  add(models) {
    return this.set(models)
  }

  set(model) {
    const models = (Array.isArray(model) ? model : [model])
      .map(m => this._prepareModel(m))
    this._byId.merge(keyBy(models, 'id'))
    return models
  }

  _prepareModel(model) {
    if (model instanceof this.Model) {
      model.collection = this
      return model
    }
    return new this.Model(model, {collection: this, parse: true})
  }
}

window.Collection = Collection
