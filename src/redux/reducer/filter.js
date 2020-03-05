import { FILTER_GLOBAL_CHANGE } from '../../config/constants'

const defaultState = {
  global: null
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case FILTER_GLOBAL_CHANGE:
      return { ...state, global: payload }
    default:
      return state
  }
}
