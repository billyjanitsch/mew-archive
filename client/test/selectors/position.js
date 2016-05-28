import test from 'ava'
import {position} from '../../src/selectors'

test('works', t => {
  const POSITION = 0
  const state = {
    player: {
      position: POSITION,
    },
  }
  const props = {}
  t.is(position(state, props), POSITION)
})
