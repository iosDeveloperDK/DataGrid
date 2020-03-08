import {
  FILTER_GLOBAL_CHANGE,
  FILTER_ENUM_CHANGE,
  FILTER_FIELD_CHANGE,
  FILTER_TOGGLE_CHANGE,
  FILTER_CLEAR
} from '../../config/constants'

const defaultState = {
  filter: JSON.parse(localStorage.getItem('filter')) || '',
  enum: JSON.parse(localStorage.getItem('enum')) || [],
  field: JSON.parse(localStorage.getItem('field')) || {},
  toggle: JSON.parse(localStorage.getItem('toggle'))
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case FILTER_FIELD_CHANGE:
      localStorage.setItem('field', JSON.stringify(payload))
      return { ...state, field: payload }
    case FILTER_GLOBAL_CHANGE:
      localStorage.setItem('filter', JSON.stringify(payload))
      return { ...state, filter: payload }
    case FILTER_ENUM_CHANGE:
      localStorage.setItem('enum', JSON.stringify(payload))
      return { ...state, enum: payload }
    case FILTER_TOGGLE_CHANGE:
      localStorage.setItem('toggle', JSON.stringify(payload))
      return { ...state, toggle: payload }
    case FILTER_CLEAR:
      localStorage.removeItem('toggle')
      localStorage.removeItem('enum')
      localStorage.removeItem('field')
      localStorage.removeItem('filter')
      return { ...state, toggle: null, field: {}, filter: '', enum: [] }
    default:
      return state
  }
}
