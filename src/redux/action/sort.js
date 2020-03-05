import {
  SORT_CHANGE_TYPE,
  SORT_MULTIPLE_CHANGE_TYPE
} from '../../config/constants'

export const changeSortType = sort => {
  return {
    type: SORT_CHANGE_TYPE,
    payload: sort
  }
}

export const changeMultipleSortType = sort => {
  return {
    type: SORT_MULTIPLE_CHANGE_TYPE,
    payload: sort
  }
}
