import {get} from 'lodash'
import {createEntityFactory} from './utils'

export const position = state => state.player.position
export const isPlaying = state => state.player.playing

export const trackFactory = createEntityFactory(state => state.entities.tracks)

export const currentTrack = trackFactory(
  state => get(state.player.playlist, state.player.current, null)
)
