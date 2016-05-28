import {PropTypes} from 'react'
import {connect} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'
import {play, pause, stop, next, prev, navigate} from '../actions'
import {position, currentTrack, isPlaying} from '../selectors'
import cs from './styles/Player'

const Control = props =>
  <div onClick={props.onClick} className={cs.control}>
    {props.icon}
  </div>

Control.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

const ProgressBar = props =>
  <div className={cs.progress} onClick={props.navigate}>
    <div className={cs.bar} style={{transform: `translateX(${props.percent - 100}%)`}} />
  </div>

ProgressBar.propTypes = {
  percent: PropTypes.number,
  navigate: PropTypes.func.isRequired,
}

const Player = props =>
  <div className={cs.player}>
    <ProgressBar percent={props.percent} navigate={props.navigate} />
    <div className={cs.controls}>
      <Control onClick={props.prev} icon='prev' />
      {props.isPlaying
        ? <Control onClick={props.stop} icon='stop' />
        : <Control onClick={props.play} icon='play' />
      }
      <Control onClick={props.next} icon='next' />
    </div>
  </div>

Player.propTypes = {
  prev: PropTypes.func.isRequired,
  play: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  percent: PropTypes.number,
  currentTrack: PropTypes.object, // track
  isPlaying: PropTypes.bool.isRequired,
}

const actions = {play, pause, stop, next, prev, navigate}

const percent = createSelector(
  [position, currentTrack],
  (position, currentTrack) =>
    position && currentTrack && position / currentTrack.length * 100
)

const mapStateToProps = createStructuredSelector({currentTrack, percent, isPlaying})

export default connect(mapStateToProps, actions)(Player)
