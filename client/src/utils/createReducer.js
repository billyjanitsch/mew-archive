import {isPlainObject, isFunction, get, every} from 'lodash'
import invariant from './invariant'

const createReducer = (initialState, handlers) => {
  invariant(isPlainObject(handlers), 'handlers must be a plain object')
  invariant(every(handlers, isFunction), 'handler values must be functions')
  return (state = initialState, action) => {
    const handler = get(handlers, action.type)
    return handler ? handler(state, action.payload) : state
  }
}

export default createReducer
