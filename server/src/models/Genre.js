import Base from './Base'
import Artist from './Artist'

export default Base.extend({
  tableName: 'genres',

  artists() {
    return this.belongsToMany(Artist)
  },
})
