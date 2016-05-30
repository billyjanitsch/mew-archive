import {observable, computed, action} from 'mobx'
import {get} from 'lodash'

export default class Player {
  @observable playing
  @observable history
  @observable playlist
  @observable current
  @observable position

  constructor(player = {}) {
    this.playing = player.playing || false
    this.history = player.history || []
    this.playlist = player.playlist || []
    this.current = player.current || null
    this.position = player.position || null
  }

  @computed get currentTrack() {
    return get(this.playlist, this.current, null)
  }

  @computed get percent() {
    if (this.position === null || this.currentTrack === null) return null
    return this.position / this.currentTrack.length * 100
  }

  @computed get queue() {
    return this.playlist.slice(this.current + 1)
  }

  @action play() {
    if (!this.playlist.length) return
    this.playing = true
    if (this.current === null) {
      this.current = 0
      this.position = null
    }
  }

  @action next() {
    if (this.current === null) return
    this.position = null
    this.current = (this.current + 1) % this.playlist.length
    if (this.current === 0) this.playing = false
  }

  @action prev() {
    if (this.current === null) return
    this.position = null
    this.current = this.current - 1
    // todo: fix
    if (this.current < 0) this.playing = false
  }

  @action playNow(tracks) {
    // todo: ensure array
    if (this.current) this.history.push(this.currentTrack)
    this.playlist = tracks
    this.current = 0
    this.position = null
    this.playing = true
  }

  toJS() {
    return {
      history: this.history.slice(),
      playlist: this.playlist.slice(),
      current: this.current,
      position: this.position,
      playing: this.playing,
    }
  }

  static fromJS(player) {
    return new Player(player)
  }
}
