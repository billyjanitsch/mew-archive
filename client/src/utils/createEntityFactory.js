import {isArray, isString, at, get, values} from 'lodash'
import {createSelector} from 'reselect'

const createEntityFactory = entities => entity => createSelector(
  [entity, entities],
  (entity, entities) => {
    if (entity === null) return null
    if (isString(entity)) return get(entities, entity)
    if (isArray(entity)) return at(entities, entity)
    return values(entities)
  }
)

export default createEntityFactory
