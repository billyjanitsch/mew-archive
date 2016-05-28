import {PropTypes} from 'react'
import {connect} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'
import {play, pause, stop, next, prev, navigate} from '../actions'
import {position, currentTrack, isPlaying} from '../selectors'
import cs from '../styles'

const Button = props =>
  <div onClick={props.onClick}>
    {props.icon}
  </div>

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

const ProgressBar = props =>
  <div className='progress' onClick={props.navigate}>
    <div className='bar' style={{transform: `translateX(${props.percent}%)`}} />
  </div>

ProgressBar.propTypes = {
  percent: PropTypes.number,
  navigate: PropTypes.func.isRequired,
}

const Player = props =>
  <div className={cs.Player}>
    <ProgressBar percent={props.percent} navigate={props.navigate} />
    <div className={cs.controls}>
      <Button onClick={props.prev} icon='prev' />
      {props.isPlaying
        ? <Button onClick={props.stop} icon='stop' />
        : <Button onClick={props.play} icon='play' />
      }
      <Button onClick={props.next} icon='next' />
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
