import test from 'ava'
import Player from '../../src/models/Player'

test('does nothing when the playlist is empty', t => {
  const player = new Player
  t.is(player.playlist.length, 0, 'starts with an empty playlist')
  t.is(player.current, null)
  t.false(player.playing, 'not playing anything')
  player.play()
  t.false(player.playing, 'still not playing anything')
})

test('plays the first track when stopped', t => {
  const tracks = [1, 2, 3]
  const player = new Player
  player.playlist = tracks
  player.play()
  t.true(player.playing)
  t.is(player.current, 0, 'playing the first track')
})
