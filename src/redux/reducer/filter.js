import {
  FILTER_GLOBAL_CHANGE,
  FILTER_ENUM_CHANGE,
  FILTER_FIELD_CHANGE,
  FILTER_TOGGLE_CHANGE
} from '../../config/constants'

const defaultState = {
  filter: null,
  search: [],
  field: {},
  toggle: null
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case FILTER_FIELD_CHANGE:
      return { ...state, field: payload }
    case FILTER_GLOBAL_CHANGE:
      return { ...state, filter: payload }
    case FILTER_ENUM_CHANGE:
      return { ...state, enum: payload }
    case FILTER_TOGGLE_CHANGE:
      return { ...state, toggle: payload }
    default:
      return state
  }
}
