import {Album, Artist, Genre, Track} from './models'
import {Collection} from './base'

class BaseCollection extends Collection {
  initialize(models, options) {
    if (!options.store) throw new Error('BaseCollection requires a store.')
    this.store = options.store
  }
}

export class Albums extends BaseCollection {
  Model = Album
  url = 'albums'
}

export class Artists extends BaseCollection {
  Model = Artist
  url = 'artists'
}

export class Genres extends BaseCollection {
  Model = Genre
  url = 'genres'
}

export class Tracks extends BaseCollection {
  Model = Track
  url = 'tracks'
}
