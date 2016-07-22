/* eslint-disable no-console */
import {resolve} from 'path'
import {EventEmitter} from 'events'
import {Client} from 'fb-watchman'

const NAME = 'mew'
const TYPES = ['mp3', 'flac', 'm4a', 'ogg']

const OPTIONS = {
  expression: ['anyof', ...TYPES.map(type => ['suffix', type])],
  fields: ['name', 'new', 'exists'],
}

export default class Watcher extends EventEmitter {
  client = new Client()

  constructor(dirs = []) {
    super()
    this.client.on('subscription', resp => {
      resp.files.forEach(file => {
        const event = file.exists ? 'add' : 'remove'
        this.emit(event, resolve(resp.root, file.name))
      })
    })
    dirs.forEach(dir => this.watch(dir))
  }

  watch(dir) {
    this.client.command(['subscribe', dir, NAME, OPTIONS])
    return this
  }

  unwatch(dir) {
    this.client.command(['unsubscribe', dir, NAME])
    return this
  }
}
