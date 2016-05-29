import {PropTypes} from 'react'

const getStore = UnwrappedComponent => {
  const Component = (props, context) =>
    <UnwrappedComponent {...props} store={context.store} />

  Component.contextTypes = {
    store: PropTypes.object.isRequired,
  }

  return Component
}

export default getStore
