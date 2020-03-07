import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS,
  DELETE_USERS
} from '../../config/constants'
import _ from 'lodash'

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
    case DELETE_USERS:
      return {
        ...state,
        users: _.filter(state.users, (_, index) => {
          return !payload.includes(index)
        })
      }
    default:
      return state
  }
}
