import invariant from './invariant'

const action = (type, transform) => {
  invariant(typeof type === 'string', 'action must have a string type')
  invariant(
    transform === undefined || typeof transform === 'function',
    'transform must be a function or left undefined'
  )
  return transform === undefined
    ? () => ({type})
    : (...args) => ({type, payload: transform(...args)})
}

export default action
