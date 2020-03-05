import { SORT_CHANGE_TYPE } from '../../config/constants'

const defaultState = {
  sort: { type: 'id', asc: 0 }
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case SORT_CHANGE_TYPE:
      var asc = payload.asc === 3 ? 0 : payload.asc
      payload.type = asc === 0 ? 'id' : payload.type
      if (state.sort.type !== payload.type) {
        asc = 1
      }
      return { ...state, sort: { ...payload, asc } }
    default:
      return state
  }
}
