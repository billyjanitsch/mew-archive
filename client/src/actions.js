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

export const play = action(PLAY)
export const pause = action(PAUSE)
export const stop = action(STOP)
export const next = action(NEXT)
export const prev = action(PREV)

export const navigate = action(NAVIGATE, position => position)

export const playNow = action(PLAY_NOW, track => ensureArray(track))
export const playNext = action(PLAY_NEXT, track => ensureArray(track))
export const playLast = action(PLAY_LAST, track => ensureArray(track))
