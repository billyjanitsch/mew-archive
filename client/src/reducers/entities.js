const INITIAL_STATE = {
  artists: {},
  albums: {},
  tracks: {},
  genres: {},
  playlists: {},
}

export default (state = INITIAL_STATE, action) => {
  if (action.entities) return {...state, ...action.payload}
  return state
}
