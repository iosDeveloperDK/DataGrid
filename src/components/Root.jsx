import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/action/users'
import List from './Table/List'
import { doSort, doFilter } from '../utils/utils'
import { Paper } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import theme from '../config/theme'

const useStyles = makeStyles({
  paper: {
    boxShadow: `0px 0px 10px 0px rgba(157,153,214,0.2)`
  }
})

export default function Root() {
  const dispatch = useDispatch()
  const {
    sort: { type, asc }
  } = useSelector(state => state.sort)
  const { global } = useSelector(state => state.filter)
  const classes = useStyles()

  const users = useSelector(state => {
    return doFilter(
      state.data.users.sort((a, b) => doSort(a, b, type, asc)),
      global
    )
  })

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <Paper
      className={classes.paper}
      style={{ width: '1200px', margin: '100px auto', overflow: 'hidden' }}
    >
      {users && <List data={users}></List>}
    </Paper>
  )
}
