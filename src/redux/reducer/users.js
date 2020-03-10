import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS,
  DELETE_USERS,
  SELECT_ALL_USERS
} from '../../config/constants'
import _ from 'lodash'

const defaultState = {
  users: [],
  isLoading: false,
  selectedRows: 0
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS:
      return { ...state, isLoading: true }
    case FETCH_USERS_SUCCESS:
      return { ...state, users: payload, isLoading: false }
    case SELECT_ALL_USERS:
      return { ...state, selectedRows: payload }
    case DELETE_USERS:
      return {
        ...state,
        users: _.filter(state.users, ({ id }) => {
          return !payload.includes(id)
        })
      }
    default:
      return state
  }
}
