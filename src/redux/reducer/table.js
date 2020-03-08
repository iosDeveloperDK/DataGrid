import { TABLE_CHANGE_OFFSET } from '../../config/constants'

const defaultState = {
  offset: 0
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case TABLE_CHANGE_OFFSET:
      return { ...state, offset: payload }
    default:
      return state
  }
}
