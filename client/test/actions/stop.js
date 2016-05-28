import test from 'ava'
import reducer from '../../src/reducers/player'
import {stop} from '../../src/actions'

const step = (t, state, action, expected) => {
  t.deepEqual(reducer(state, action), expected || state)
}

test('stops when playing', step,
  {history: [], playlist: [1, 2, 3], current: 1, position: 14, playing: true},
  stop(),
  {history: [], playlist: [1, 2, 3], current: null, position: null, playing: false}
)

test('stops when paused', step,
  {history: [], playlist: [1, 2, 3], current: 1, position: 14, playing: false},
  stop(),
  {history: [], playlist: [1, 2, 3], current: null, position: null, playing: false}
)

test('does nothing when already stopped', step,
  {history: [], playlist: [1, 2, 3], current: null, position: null, playing: false},
  stop()
)
