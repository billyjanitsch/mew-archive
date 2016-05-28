import ensureArray from './ensureArray'

const insert = (arr, item, position) => [
  ...arr.slice(0, position + 1),
  ...ensureArray(item),
  ...arr.slice(position + 1),
]

export default insert
