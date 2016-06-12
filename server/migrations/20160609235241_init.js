exports.up = knex => knex.schema
  .createTable('genres', table => {
    table.increments('id').primary()
    table.string('name')
  })
  .createTable('artists', table => {
    table.increments('id').primary()
    table.string('name')
  })
  .createTable('albums', table => {
    table.increments('id').primary()
    table.string('title')
    table.integer('year')
  })
  .createTable('tracks', table => {
    table.increments('id').primary()
    table.string('title')
    table.integer('number')
    table.integer('disc')
    table.string('file', 500)
    table.integer('album_id').references('albums.id')
  })
  .createTable('albums_artists', table => {
    table.integer('artist_id').references('artists.id')
    table.integer('album_id').references('albums.id')
  })
  .createTable('artists_genres', table => {
    table.integer('artist_id').references('artists.id')
    table.integer('genre_id').references('genres.id')
  })
  .createTable('artists_tracks', table => {
    table.integer('artist_id').references('artists.id')
    table.integer('track_id').references('tracks.id')
  })

exports.down = knex => knex.schema
  .dropTable('genres')
  .dropTable('artists')
  .dropTable('albums')
  .dropTable('tracks')
  .dropTable('albums_artists')
  .dropTable('artists_genres')
  .dropTable('artists_tracks')
