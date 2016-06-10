import api from './api'
import Watcher from './Watcher'
import {parse} from './parser'
import {Track} from './models'

const DIRS = ['/Users/billy/Dropbox/music-temp']

const watcher = new Watcher(DIRS)

watcher.on('add', file => {
  parse(file).then(::Track.generate).catch(::console.error)
})

module.exports = api
