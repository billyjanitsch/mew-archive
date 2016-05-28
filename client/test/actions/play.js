import test from 'ava'
import reducer from '../../src/reducers/player'
import {play} from '../../src/actions'

const step = (t, state, action, expected) => {
  t.deepEqual(reducer(state, action), expected || state)
}

test('does nothing when already playing', step,
  {history: [], playlist: [1, 2, 3], current: 1, position: 14, playing: true},
  play()
)

test('does nothing when stopped and there is nothing to play', step,
  {history: [], playlist: [], current: null, position: null, playing: false},
  play()
)

test('resumes playing when paused', step,
  {history: [], playlist: [1, 2, 3], current: 1, position: 14, playing: false},
  play(),
  {history: [], playlist: [1, 2, 3], current: 1, position: 14, playing: true}
)

test('plays the first track when stopped', step,
  {history: [], playlist: [1, 2, 3], current: null, position: null, playing: false},
  play(),
  {history: [], playlist: [1, 2, 3], current: 0, position: null, playing: true}
)
