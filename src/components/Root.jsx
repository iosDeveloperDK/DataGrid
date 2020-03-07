import React, { useEffect } from 'react'
import _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/action/users'
import List from './Table/List'
import { doSort, doFilter, customizer } from '../utils/utils'
import { Paper, Grid, Box, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import theme from '../config/theme'
import { createSelector } from 'reselect'
import Filter from './Filter/Filter'
import Settings from './Settings/Settings'

const useStyles = makeStyles({
  paper: {
    boxShadow: `0px 0px 10px 0px rgba(157,153,214,0.2)`
  }
})

export default function Root() {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { field, filter, enum: enumFilter, toggle } = useSelector(
    state => state.filter
  )
  const users = useSelector(state => state.data.users)

  const usersSelector = createSelector(
    state => state.sort.sort,
    sort =>
      _.filter(
        _.orderBy(
          users,
          sort.map(sort => sort.type),
          sort.map(sort => (sort.asc ? 'asc' : 'desc'))
        ),
        item => {
          let filterBool = true
          let fieldBool = true
          let enumBool = true
          let toggleBool = true

          if (!_.isEmpty(filter)) {
            filterBool = _.some(item, value => {
              return _.includes(
                value.toString().toLowerCase(),
                filter.toLowerCase()
              )
            })
          }
          if (!_.isEmpty(field)) {
            fieldBool = _.isMatchWith(item, field, customizer)
          }
          if (!_.isEmpty(enumFilter)) {
            enumBool = _.some(item, value => {
              return _.includes(enumFilter, value)
            })
          }
          if (toggle !== null) {
            toggleBool = _.isMatch(item, { isOnline: toggle })
          }
          return filterBool && fieldBool && enumBool && toggleBool
        }
      )
  )
  const test = useSelector(usersSelector)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  console.log('render root')

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        margin: ' auto',
        width: '100%',
        height: '100%'
      }}
    >
      <Box p={2} width="100%">
        <Typography color="primary" variant="overline">
          TASK: DataGrid (300/300)
        </Typography>
        <Grid
          container
          style={{
            height: '828px'
          }}
        >
          <Grid item sm={4}>
            <Paper
              className={classes.paper}
              style={{ overflow: 'hidden', height: '100%', marginRight: '8px' }}
            >
              <Filter />
              <Settings />
            </Paper>
          </Grid>
          <Grid item sm={8}>
            <Paper
              className={classes.paper}
              style={{ overflow: 'hidden', height: '100%', marginLeft: '8px' }}
            >
              {users && <List data={test}></List>}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
