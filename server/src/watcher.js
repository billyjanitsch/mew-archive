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

export const watch = dir =>
  client.command(['subscribe', dir, NAME, options])

export const unwatch = dir =>
  client.command(['unsubscribe', dir, NAME])

export const subscribe = (method, cb) => {
  client.on('subscription', resp => {
    resp.files.forEach(file => cb({
      path: path.resolve(resp.root, file.name),
      exists: file.exists,
      new: file.new,
    }))
  })
}
