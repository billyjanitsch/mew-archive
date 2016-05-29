import test from 'ava'
import Player from '../../src/models/Player'

test('dummy player test', t => {
  const player = new Player()
  player.play()
  t.false(player.playing)
})

test('dummy player test 2', t => {
  const player = new Player()
  const tracks = [1, 2, 3]
  player.playNow(tracks)
  t.is(player.current, 0)
  t.true(player.playing)
  t.deepEqual(player.playlist.slice(), tracks)
})
