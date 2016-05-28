import test from 'ava'
import {currentTrack} from '../../src/selectors'

test('selects the current track', t => {
  const TRACK_A = {}
  const TRACK_B = {}
  const TRACK_C = {}
  const state = {
    entities: {
      tracks: {
        a: TRACK_A,
        b: TRACK_B,
        c: TRACK_C,
      },
    },
    player: {
      playlist: ['b', 'c', 'a'],
      current: 1,
    },
  }
  const props = {}
  t.is(currentTrack(state, props), TRACK_C)
})

test('guards against non-existent track', t => {
  const state = {
    entities: {},
    player: {
      playlist: ['b', 'c', 'a'],
      current: 1,
    },
  }
  const props = {}
  t.is(currentTrack(state, props), undefined)
})
