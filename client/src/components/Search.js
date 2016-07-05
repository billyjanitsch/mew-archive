import {Component} from 'react'
import mousetrap from 'mousetrap'
// import CSSTransitionGroup from 'react-addons-css-transition-group'
import cs from './styles/Search.css'

const Search = () =>
  <div className={cs.window}>
    <input className={cs.bar} />
    <div className='results'>
      results...
    </div>
  </div>

export default class SearchModal extends Component {
  state = {
    open: false,
  }

  componentDidMount() {
    mousetrap.bind('space', this.open)
    mousetrap.bind('esc', this.close)
  }

  componentWillUnmount() {
    mousetrap.unbind('space')
    mousetrap.unbind('esc')
  }

  open = () => this.setState({open: true})
  close = () => this.setState({open: false})

  render() {
    return (
      <div>
        {this.state.open &&
          <div className={cs.modal}>
            <div className={cs.background} onClick={this.close} />
            <Search />
          </div>
        }
      </div>
    )
  }
}
