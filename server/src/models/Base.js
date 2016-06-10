import bookshelf from './bookshelf'

export default bookshelf.Model.extend({
  fetchOrCreate(options) {
    return this.fetch(options)
      .then(model => model || this.save(null, options))
  },
})
