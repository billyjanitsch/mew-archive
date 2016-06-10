/* eslint-disable no-console */
import path from 'path'
import {Client} from 'fb-watchman'

const NAME = 'mew'
const TYPES = ['mp3', 'flac', 'm4a', 'ogg']

const client = new Client()

const options = {
  expression: ['anyof', ...TYPES.map(type => ['suffix', type])],
  fields: ['name', 'new', 'exists'],
}

const subscriptions = {
  add: [],
  remove: [],
}

client.on('subscription', resp => {
  resp.files.forEach(file => {
    const filePath = path.resolve(resp.root, file.name)
    const method = file.exists ? 'add' : 'remove'
    subscriptions[method].forEach(cb => cb(filePath))
  })
})

export const watch = dir =>
  client.command(['subscribe', dir, NAME, options])

export const unwatch = dir =>
  client.command(['unsubscribe', dir, NAME])

export const subscribe = (method, cb) => {
  subscriptions.method.push(cb)
}
