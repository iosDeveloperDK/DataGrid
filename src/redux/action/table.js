import { TABLE_CHANGE_OFFSET } from '../../config/constants'

export const changeRowOffset = offset => {
  return {
    type: TABLE_CHANGE_OFFSET,
    payload: offset
  }
}
