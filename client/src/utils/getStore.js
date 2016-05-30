import {PropTypes} from 'react'
import {observer} from 'mobx-react'

const getStore = UnwrappedComponent => {
  const ObservableComponent = observer(UnwrappedComponent)

  const Component = (props, context) =>
    <ObservableComponent {...props} store={context.store} />

  Component.contextTypes = {
    store: PropTypes.object.isRequired,
  }

  return Component
}

export default getStore
