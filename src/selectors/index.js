import _ from 'lodash'
import { doFilter } from '../utils/utils'
import { createSelector } from 'reselect'

const sortSelector = state => state.sort.sort
const usersSelector = state => state.data.users
const filterSelector = state => state.filter

export default createSelector(
  [sortSelector, usersSelector, filterSelector],
  (sort, users, filter) => {
    return _.filter(
      _.orderBy(
        users,
        sort.map(sort => sort.type),
        sort.map(sort => (sort.asc ? 'asc' : 'desc'))
      ),
      item => {
        return doFilter(item, filter)
      }
    )
  }
)
