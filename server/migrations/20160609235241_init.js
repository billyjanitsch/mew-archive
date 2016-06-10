exports.up = knex => knex.schema
  .createTable('artists', table => {
    table.increments('id').primary()
    table.string('name')
  })
  .createTable('albums', table => {
    table.increments('id').primary()
    table.string('title')
    table.integer('artist').references('artists.id')
  })
  .createTable('tracks', table => {
    table.increments('id').primary()
    table.string('title')
    table.integer('number')
    table.integer('disc')
    table.string('file', 500)
    table.integer('album').references('albums.id')
    table.integer('artist').references('artists.id')
  })

exports.down = knex => knex.schema
  .dropTable('artists')
  .dropTable('albums')
  .dropTable('tracks')
