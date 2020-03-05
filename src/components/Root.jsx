import React, { useEffect } from 'react'
import _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/action/users'
import List from './Table/List'
import { doSort, doFilter } from '../utils/utils'
import { Paper } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import theme from '../config/theme'
import { createSelector } from 'reselect'

const useStyles = makeStyles({
  paper: {
    boxShadow: `0px 0px 10px 0px rgba(157,153,214,0.2)`
  }
})

export default function Root() {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { search } = useSelector(state => state.filter)
  const users = useSelector(state => state.data.users)
  console.log(search)

  // const usersSelector = createSelector(
  //   state => state.sort.sort,
  //   sort =>
  //     _.filter(
  //       _.orderBy(
  //         users,
  //         sort.map(sort => sort.type),
  //         sort.map(sort => (sort.asc ? 'asc' : 'desc'))
  //       ),
  //       function(item) {
  //         return search.reduce((acc, element) => {
  //           if (
  //             item[element.id]
  //               .toString()
  //               .toLowerCase()
  //               .indexOf(element.search.toLowerCase()) > -1
  //           ) {
  //             return true
  //           } else {
  //             return false
  //           }
  //         }, true)
  //       }
  //     )
  // )
  const usersSelector = createSelector(
    state => state.sort.sort,
    sort =>
      _.orderBy(
        users,
        sort.map(sort => sort.type),
        sort.map(sort => (sort.asc ? 'asc' : 'desc'))
      )
  )
  const test = useSelector(usersSelector)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <Paper
      className={classes.paper}
      style={{ width: '1200px', margin: '100px auto', overflow: 'hidden' }}
    >
      {users && <List data={test}></List>}
    </Paper>
  )
}
