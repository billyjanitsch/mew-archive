import Base from './Base'
import Artist from './Artist'
import Album from './Album'
import bookshelf from './bookshelf'

export default Base.extend({
  tableName: 'tracks',

  artists() {
    return this.belongsToMany(Artist)
  },

  album() {
    return this.belongsTo(Album)
  },
}, {
  fromFile(track, artist, album) {
    return this.forge({...track, artist, album})
  },

  generate(track) {
    return bookshelf.transaction(async transacting => {
      const artist = await Artist.fromFile(track.artist).fetchOrCreate({transacting})
      const album = await Album.fromFile(track.album, artist.get('id')).fetchOrCreate({transacting})
      return this.fromFile(track, album.get('artist'), album.get('id')).fetchOrCreate({transacting})
    })
  },
})
