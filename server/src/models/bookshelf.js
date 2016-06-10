import bookshelf from 'bookshelf'
import knex from 'knex'
import config from '../../knexfile'

const connection = knex(config)
export default bookshelf(connection)
