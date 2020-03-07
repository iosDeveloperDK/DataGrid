import { TABLE_CHANGE_OFFSET, TABLE_SELECT_ALL } from '../../config/constants'

const defaultState = {
  offsetLeft: 0
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case TABLE_CHANGE_OFFSET:
      return { ...state, offsetLeft: payload }
    case TABLE_SELECT_ALL:
      return { ...state, selectedRows: payload }
    default:
      return state
  }
}
