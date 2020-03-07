import { FETCH_USERS_SUCCESS, FETCH_USERS } from '../../config/constants'

const defaultState = {
  users: [],
  isLoading: false
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS:
      return { ...state, isLoading: true }
    case FETCH_USERS_SUCCESS:
      return { ...state, users: payload, isLoading: false }
    default:
      return state
  }
}
