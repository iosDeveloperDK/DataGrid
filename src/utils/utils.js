import _ from 'lodash'

export const doFilter = (
  item,
  { searchFilter, fieldFilter, enumFilter, toggleFilter }
) => {
  let filterBool = true
  let fieldBool = true
  let enumBool = true
  let toggleBool = true

  if (!_.isEmpty(searchFilter)) {
    filterBool = _.some(item, value => {
      return _.includes(
        value.toString().toLowerCase(),
        searchFilter.toLowerCase()
      )
    })
  }
  if (!_.isEmpty(fieldFilter)) {
    fieldBool = _.isMatchWith(item, fieldFilter, customizer)
  }
  if (!_.isEmpty(enumFilter)) {
    enumBool = _.some(item, value => {
      return _.includes(enumFilter, value)
    })
  }
  if (toggleFilter !== null) {
    toggleBool = _.isMatch(item, { isOnline: toggleFilter })
  }

  return filterBool && fieldBool && enumBool && toggleBool
}

export const customizer = (objValue, srcValue) => {
  return objValue
    .toString()
    .toLowerCase()
    .includes(srcValue.toLowerCase())
}

export const toDateFormat = date => {
  var dd = date.getDate()
  var mm = date.getMonth() + 1
  var yyyy = date.getFullYear()
  if (dd < 10) {
    dd = '0' + dd
  }

  if (mm < 10) {
    mm = '0' + mm
  }
  return yyyy + '-' + mm + '-' + dd
}
