import { TABLE_CHANGE_OFFSET, TABLE_SELECT_ALL } from '../../config/constants'

export const changeRowOffset = offset => {
  return {
    type: TABLE_CHANGE_OFFSET,
    payload: offset
  }
}

export const selectAllRow = select => {
  return {
    type: TABLE_SELECT_ALL,
    payload: select
  }
}
