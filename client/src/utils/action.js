const action = (type, payload) =>
  payload === undefined ? {type} : {type, payload}

export default action
