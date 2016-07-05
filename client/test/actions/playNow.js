import test from 'ava'
import {toJS} from 'mobx'
import Player from '../../src/models/Player'

test('plays a list of tracks', t => {
  let player = new Player
  const tracks = [1, 2, 3]
  player.playNow(tracks)
  player = toJS(player)
  t.deepEqual(player.playlist, tracks, 'queued the tracks')
  t.is(player.current, 0, 'started playing the first track')
  t.true(player.playing, 'playing')
  t.is(player.position, null, 'does not have a position yet')
})
