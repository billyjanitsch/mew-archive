#!/usr/bin/env node
const yargs = require('yargs')

const argv = yargs
  .command('start', 'start the server', {}, argv => {
    require('./start')
  })
  .command('stop', 'stop the server')
  .help()
  .strict()
  .argv

console.log('omg')
