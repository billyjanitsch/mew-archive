import {isEmpty} from 'lodash'
import {insert, createReducer} from '../utils'
import {PLAY_NOW, PLAY_NEXT, PLAY_LAST, PLAY, PAUSE, STOP, NEXT, PREV} from '../actions'

const INITIAL_STATE = {
  history: [],
  playlist: [],
  current: null,
  position: null,
  playing: false,
}

export default createReducer(INITIAL_STATE, {
  [PLAY_NOW]: (state, payload) => ({
    ...state,
    current: 0,
    position: null,
    playlist: payload,
    playing: true,
  }),

  [PLAY_NEXT]: (state, payload) => {
    const playlist = insert(state.playlist, payload, state.current + 1)
    return {...state, playlist}
  },

  [PLAY_LAST]: (state, payload) => {
    const playlist = state.playlist.concat(payload)
    return {...state, playlist}
  },

  [PLAY]: state => {
    if (isEmpty(state.playlist)) return state
    if (state.current !== null) return {...state, playing: true}
    return {...state, current: 0, position: null, playing: true}
  },

  [PAUSE]: state => (
    {...state, playing: false}
  ),

  [STOP]: state => (
    {...state, playing: false, current: null, position: null}
  ),

  [NEXT]: state => {
    if (state.current === null) return state
    return state.current + 1 < state.playlist.length
      ? {...state, current: state.current + 1, position: null}
      : {...state, current: 0, position: null, playing: false}
  },

  [PREV]: state => {
    if (state.current === null) return state
    return state.current !== 0
      ? {...state, current: state.current - 1, position: null}
      : {...state, current: 0, position: null, playing: false}
  },
})
