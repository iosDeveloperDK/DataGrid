import {
  FILTER_SEARCH_CHANGE,
  FILTER_ENUM_CHANGE,
  FILTER_FIELD_CHANGE,
  FILTER_TOGGLE_CHANGE,
  FILTER_CLEAR
} from '../../config/constants'

const defaultState = {
  searchFilter: JSON.parse(localStorage.getItem('searchFilter')) || '',
  enumFilter: JSON.parse(localStorage.getItem('enumFilter')) || [],
  fieldFilter: JSON.parse(localStorage.getItem('fieldFilter')) || {},
  toggleFilter: JSON.parse(localStorage.getItem('toggleFilter'))
}

export default (state = defaultState, { type, payload, save }) => {
  switch (type) {
    case FILTER_FIELD_CHANGE:
      localStorage.setItem('fieldFilter', JSON.stringify(payload))
      return { ...state, fieldFilter: payload }
    case FILTER_SEARCH_CHANGE:
      if (save) {
        localStorage.setItem('searchFilter', JSON.stringify(payload))
      }
      return { ...state, searchFilter: payload }
    case FILTER_ENUM_CHANGE:
      if (save) {
        localStorage.setItem('enumFilter', JSON.stringify(payload))
      }
      return { ...state, enumFilter: payload }
    case FILTER_TOGGLE_CHANGE:
      localStorage.setItem('toggleFilter', JSON.stringify(payload))
      return { ...state, toggleFilter: payload }
    case FILTER_CLEAR:
      localStorage.removeItem('toggleFilter')
      localStorage.removeItem('enumFilter')
      localStorage.removeItem('fieldFilter')
      localStorage.removeItem('searchFilter')
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
