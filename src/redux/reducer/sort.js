import {
  SORT_CHANGE_TYPE,
  SORT_MULTIPLE_CHANGE_TYPE
} from '../../config/constants'

const defaultState = {
  sort: JSON.parse(localStorage.getItem('sort') || '[]')
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case SORT_CHANGE_TYPE:
      return { ...state, sort: payload }
    case SORT_MULTIPLE_CHANGE_TYPE:
      return { ...state, sort: payload }
    default:
      return state
  }
}
