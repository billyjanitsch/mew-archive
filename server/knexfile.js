module.exports = {
  client: 'sqlite3',
  connection: {
    filename: `${process.env.HOME}/.mew/library.db`,
  },
  useNullAsDefault: true,
}
