import {observer} from 'mobx-react'
import {getStore} from '../utils'
import cs from './styles/Player.css'

const translate = percent => ({transform: `translateX(${percent - 100}%)`})

const Control = props =>
  <div onClick={props.onClick} className={cs.control}>
    {props.icon}
  </div>

const $ProgressBar = props =>
  <div className={cs.progress} onClick={props.player.navigate}>
    <div className={cs.bar} style={translate(props.player.percent)} />
  </div>

const ProgressBar = observer($ProgressBar)

const $Player = props =>
  <div className={cs.player}>
    <ProgressBar player={props.player} />
    <div className={cs.controls}>
      <Control onClick={props.player.prev} icon='prev' />
      {props.player.isPlaying
        ? <Control onClick={props.player.stop} icon='stop' />
        : <Control onClick={props.player.play} icon='play' />
      }
      <Control onClick={props.player.next} icon='next' />
    </div>
  </div>

const Player = observer($Player)

const PlayerContainer = props =>
  <Player player={props.store.player} />

export default getStore(PlayerContainer)
