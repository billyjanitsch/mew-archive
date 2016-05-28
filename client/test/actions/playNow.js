import test from 'ava'
import reducer from '../../src/reducers/player'
import {playNow} from '../../src/actions'

const step = (t, state, action, expected) => {
  t.deepEqual(reducer(state, action), expected || state)
}

test('replaces the playlist with a single track and begins playing', step,
  {history: [], playlist: [1, 2, 3], current: 1, position: 3, playing: false},
  playNow(4),
  {history: [], playlist: [4], current: 0, position: null, playing: true}
)

test('replaces the playlist with a list of tracks and begins playing', step,
  {history: [], playlist: [1, 2, 3], current: 1, position: 3, playing: false},
  playNow([4, 5, 6]),
  {history: [], playlist: [4, 5, 6], current: 0, position: null, playing: true}
)
