export const doSort = (a, b, key, asc) => {
  var first = a[key]
  var second = b[key]

  if (!Number.isInteger(first) && !Number.isInteger(second)) {
    first = first.toString().toLowerCase()
    second = second.toString().toLowerCase()
  }

  const ascending = asc === 1 ? 1 : -1

  if (first > second) {
    return ascending
  } else if (first < second) {
    return -ascending
  }
  return 0
}

export const doAscending = (key, type, asc) => {
  if (key === type) {
    if (asc == null) {
      return true
    } else if (asc) {
      return false
    } else {
      return null
    }
  }
}

export const doFilter = (values, filter, fields = ['login', 'type']) => {
  if (!filter) {
    return values
  }

  const lowerCaseFilter = filter.toLowerCase()

  return values.filter(value =>
    Object.keys(value)
      .map(key =>
        fields.includes(key) ? value[key].toString().toLowerCase() : ''
      )
      .find(element => element.toString().includes(lowerCaseFilter))
  )
}

export const customizer = (objValue, srcValue) => {
  return objValue
    .toString()
    .toLowerCase()
    .includes(srcValue.toLowerCase())
}
