import Base from './Base'
import Album from './Album'
import Track from './Track'

export default Base.extend({
  tableName: 'artists',

  albums() {
    return this.hasMany(Album, 'artist')
  },

  tracks() {
    return this.hasMany(Track, 'artist')
  },
}, {
  fromFile(name) {
    return this.forge({name})
  },
})
