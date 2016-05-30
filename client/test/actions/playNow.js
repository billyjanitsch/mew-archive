import test from 'ava'
import Player from '../../src/models/Player'

test('plays a list of tracks', t => {
  const player = new Player()
  const tracks = [1, 2, 3]
  player.playNow(tracks)
  t.deepEqual(player.playlist.slice(), tracks, 'queued the tracks')
  t.is(player.current, 0, 'started playing the first track')
  t.true(player.playing, 'playing')
  t.is(player.position, null, 'does not have a position yet')
})
