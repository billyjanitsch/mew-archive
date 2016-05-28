import {isPlainObject, get} from 'lodash'

const createReducer = (initialState, handlers) => {
  if (!isPlainObject(handlers)) throw new Error('`handlers` must be an object.')
  return (state = initialState, action) => {
    const handler = get(handlers, action.type)
    return handler ? handler(state, action.payload) : state
  }
}

export default createReducer
