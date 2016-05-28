import {action, ensureArray} from './utils'

export const PLAY = 'PLAY'
export const PAUSE = 'PAUSE'
export const STOP = 'STOP'
export const NEXT = 'NEXT'
export const PREV = 'PREV'
export const NAVIGATE = 'NAVIGATE'

export const PLAY_NOW = 'PLAY_NOW'
export const PLAY_NEXT = 'PLAY_NEXT'
export const PLAY_LAST = 'PLAY_LAST'

export const play = () => action(PLAY)
export const pause = () => action(PAUSE)
export const stop = () => action(STOP)
export const next = () => action(NEXT)
export const prev = () => action(PREV)

export const navigate = position =>
  action(NAVIGATE, position)

export const playNow = track =>
  action(PLAY_NOW, ensureArray(track))

export const playNext = track =>
  action(PLAY_NEXT, ensureArray(track))

export const playLast = track =>
  action(PLAY_LAST, ensureArray(track))
