import bookshelf from './bookshelf'

export default bookshelf.Model.extend({
  async fetchOrCreate(options) {
    const model = await this.fetch(options)
    return model || this.save(null, options)
  },
})
