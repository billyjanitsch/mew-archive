import {Component, Children, PropTypes} from 'react'

export default class Provider extends Component {
  static childContextTypes = {
    store: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    // Store. Store never changes.
    this.store = props.store
  }

  getChildContext() {
    return {store: this.store}
  }

  render() {
    return Children.only(this.props.children)
  }
}
