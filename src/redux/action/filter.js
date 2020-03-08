import {
  FILTER_GLOBAL_CHANGE,
  FILTER_ENUM_CHANGE,
  FILTER_FIELD_CHANGE,
  FILTER_TOGGLE_CHANGE,
  FILTER_CLEAR
} from '../../config/constants'

export const fieldFilterChange = field => {
  return {
    type: FILTER_FIELD_CHANGE,
    payload: field
  }
}

export const globalFilterChange = filter => {
  return {
    type: FILTER_GLOBAL_CHANGE,
    payload: filter
  }
}

export const enumFilterChange = filter => {
  return {
    type: FILTER_ENUM_CHANGE,
    payload: filter
  }
}

export const toggleFilterChange = filter => {
  return {
    type: FILTER_TOGGLE_CHANGE,
    payload: filter
  }
}

export const clearFilters = () => {
  return {
    type: FILTER_CLEAR
  }
}
