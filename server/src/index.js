import api from './api'
import {watch, subscribe} from './watcher'
import {parse} from './parser'
import {Track} from './models'

subscribe('add', file => {
  parse(file.path).then(::Track.generate).catch(::console.error)
})

const DIR = '/Users/billy/music-temp'
watch(DIR)

module.exports = api
