import Base from './Base'
import Album from './Album'
import Track from './Track'

export default Base.extend({
  tableName: 'artists',

  albums() {
    return this.belongsToMany(Album)
  },

  tracks() {
    return this.belongsToMany(Track)
  },
})
