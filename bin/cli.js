#!/usr/bin/env node
const yargs = require('yargs')

const argv = yargs
  .command('start', 'Start the server', {}, argv => {
    require('../start')
  })
  .command('stop', 'Stop the server')
  .help()
  .version()
  .alias('h', 'help')
  .alias('v', 'version')
  .strict()
  .argv
