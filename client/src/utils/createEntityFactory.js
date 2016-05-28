import {isArray, isString, at, get, values, noop} from 'lodash'
import {createSelector} from 'reselect'

const createEntityFactory = entities => entity => {
  let entityFn = entity
  if (entity === undefined) entityFn = noop
  if (isString(entity)) entityFn = (_, props) => get(props, entity)
  return createSelector(
    [entityFn, entities],
    (entity, entities) => {
      if (entity === null) return null
      if (isString(entity)) return get(entities, entity)
      if (isArray(entity)) return at(entities, entity)
      return values(entities)
    }
  )
}

export default createEntityFactory
