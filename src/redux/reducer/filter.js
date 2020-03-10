import {
  FILTER_SEARCH_CHANGE,
  FILTER_ENUM_CHANGE,
  FILTER_FIELD_CHANGE,
  FILTER_TOGGLE_CHANGE,
  FILTER_CLEAR
} from '../../config/constants'

const defaultState = {
  searchFilter: '',
  enumFilter: [],
  fieldFilter: {},
  toggleFilter: null
}

export default (state = defaultState, { type, payload, save }) => {
  switch (type) {
    case FILTER_FIELD_CHANGE:
      return { ...state, fieldFilter: payload }
    case FILTER_SEARCH_CHANGE:
      return { ...state, searchFilter: payload }
    case FILTER_ENUM_CHANGE:
      return { ...state, enumFilter: payload }
    case FILTER_TOGGLE_CHANGE:
      return { ...state, toggleFilter: payload }
    case FILTER_CLEAR:
      return {
        ...state,
        toggleFilter: null,
        fieldFilter: {},
        searchFilter: '',
        enumFilter: []
      }
    default:
      return state
  }
}
