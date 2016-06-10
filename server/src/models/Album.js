import Base from './Base'
import Artist from './Artist'
import Track from './Track'

export default Base.extend({
  tableName: 'albums',

  artist() {
    return this.belongsTo(Artist, 'artist')
  },

  tracks() {
    return this.hasMany(Track, 'album')
  },
}, {
  fromFile(title, artist) {
    return this.forge({title, artist})
  },
})
