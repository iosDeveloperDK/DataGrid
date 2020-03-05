import { SORT_CHANGE_TYPE } from '../../config/constants'

export const changeSortType = (type, asc) => {
  return {
    type: SORT_CHANGE_TYPE,
    payload: { type, asc }
  }
}
