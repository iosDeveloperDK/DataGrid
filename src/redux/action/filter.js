import {
  FILTER_SEARCH_CHANGE,
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

export const searchFilterChange = (filter, save = true) => {
  return {
    type: FILTER_SEARCH_CHANGE,
    payload: filter,
    save
  }
}

export const enumFilterChange = (filter, save = true) => {
  return {
    type: FILTER_ENUM_CHANGE,
    payload: filter,
    save
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
