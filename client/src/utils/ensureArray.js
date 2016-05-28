import {isArray} from 'lodash'

const ensureArray = x => isArray(x) ? x : [x]

export default ensureArray
