import {
  FILTER_GLOBAL_CHANGE,
  FILTER_SEARCH_CHANGE
} from '../../config/constants'

const defaultState = {
  global: null,
  search: []
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case FILTER_GLOBAL_CHANGE:
      return { ...state, global: payload }
    case FILTER_SEARCH_CHANGE:
      return { ...state, search: [...state.search, payload] }
    default:
      return state
  }
}
