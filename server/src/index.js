import api from './api'
import Watcher from './Watcher'
import parse from './parse'
import {Track} from './models'

const DIRS = ['/Users/billy/Dropbox/music-temp']

const watcher = new Watcher(DIRS)

watcher.on('add', async file => {
  try {
    Track.generate(await parse(file))
  } catch (error) {
    console.error(error) // eslint-disable-line
  }
})

module.exports = api
