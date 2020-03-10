import React, { useEffect, Component } from 'react'
import _ from 'lodash'
import { useDispatch, useSelector, connect } from 'react-redux'
import { fetchUsers } from '../redux/action/users'
import List from './Table/List'
import { customizer } from '../utils/utils'
import { Paper, Grid, Box, Typography, withStyles } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { createSelector } from 'reselect'
import Filter from './Filter/Filter'
import Settings from './Settings/Settings'
import { useLocation } from 'react-router-dom'
import { enumFilterChange, globalFilterChange } from '../redux/action/filter'

// const useStyles = makeStyles({
// paper: {
//   boxShadow: `0px 0px 10px 0px rgba(157,153,214,0.2)`
// }
// })
const styles = {
  paper: {
    boxShadow: `0px 0px 10px 0px rgba(157,153,214,0.2)`
  }
}

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const sortRESelector = state => state.sort.sort
const usersRESelector = state => state.data.users
const filterRESelector = state => state.filter

const usersSelector = createSelector(
  [sortRESelector, usersRESelector, filterRESelector],
  (sort, users, filterData) => {
    const { field, filter, enum: enumFilter, toggle } = filterData
    return _.filter(
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
  }
)
class Root extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const { users, classes } = this.props
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
                style={{
                  overflow: 'hidden',
                  height: '100%',
                  marginRight: '8px'
                }}
              >
                <Filter />
                <Settings data={users} />
              </Paper>
            </Grid>
            <Grid item sm={8}>
              <Paper
                className={classes.paper}
                style={{
                  overflow: 'hidden',
                  height: '100%',
                  marginLeft: '8px'
                }}
              >
                {<List data={users}></List>}
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </div>
    )
  }
}

const mapDispatchToProps = {
  fetchUsers,
  enumFilterChange,
  globalFilterChange
}

const mapStateToProps = (state, ownProps) => ({
  users: usersSelector(state),
  router: state.router
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Root))
// export default function Root() {
//   const classes = useStyles()
//   const dispatch = useDispatch()
//   let query = useQuery()

//   const { field, filter, enum: enumFilter, toggle } = useSelector(
//     filterRESelector
//   )

//   // const router = useSelector(state => state.router)
//   // const sort = useSelector(sortRESelector)
//   // const users = useSelector(usersRESelector)

// const usersSelector = createSelector(
//   [sortRESelector, usersRESelector, filterRESelector],
//   (sort, users, filter) => {
//     console.log('order', sort, users, filter)
//     return users
//   }
// )

//   const users = useSelector(state => {
//     return usersSelector(state)
//   })

//   useEffect(() => {
//     dispatch(fetchUsers())
//   }, [])

//   // useEffect(() => {
// if (query.get('enum')) {
//   dispatch(enumFilterChange(query.get('enum'), false))
// }
// if (query.get('text')) {
//   dispatch(globalFilterChange(query.get('text'), false))
// }
//   // }, [router])
//   console.log('render root')

//   // const sortUsers = () => {
// return _.filter(
//   _.orderBy(
//     users,
//     sort.map(sort => sort.type),
//     sort.map(sort => (sort.asc ? 'asc' : 'desc'))
//   ),
//   item => {
//     console.log('filtering')

//     let filterBool = true
//     let fieldBool = true
//     let enumBool = true
//     let toggleBool = true

//     if (!_.isEmpty(filter)) {
//       filterBool = _.some(item, value => {
//         return _.includes(
//           value.toString().toLowerCase(),
//           filter.toLowerCase()
//         )
//       })
//     }
//     if (!_.isEmpty(field)) {
//       fieldBool = _.isMatchWith(item, field, customizer)
//     }
//     if (!_.isEmpty(enumFilter)) {
//       enumBool = _.some(item, value => {
//         return _.includes(enumFilter, value)
//       })
//     }
//     if (toggle !== null) {
//       toggleBool = _.isMatch(item, { isOnline: toggle })
//     }
//     return filterBool && fieldBool && enumBool && toggleBool
//   }
// )
//   // }

//   // return (
//   //   <div
//   //     style={{
//   //       display: 'flex',
//   //       alignItems: 'flex-start',
//   //       margin: ' auto',
//   //       width: '100%',
//   //       height: '100%'
//   //     }}
//   //   >
//   //     <Box p={2} width="100%">
//   //       <Typography color="primary" variant="overline">
//   //         TASK: DataGrid (300/300)
//   //       </Typography>
//   //       <Grid
//   //         container
//   //         style={{
//   //           height: '828px'
//   //         }}
//   //       >
//   //         <Grid item sm={4}>
//   //           <Paper
//   //             className={classes.paper}
//   //             style={{ overflow: 'hidden', height: '100%', marginRight: '8px' }}
//   //           >
//   //             <Filter />
//   //             {/* <Settings data={sortUsers()} /> */}
//   //           </Paper>
//   //         </Grid>
//   //         <Grid item sm={8}>
//   //           <Paper
//   //             className={classes.paper}
//   //             style={{ overflow: 'hidden', height: '100%', marginLeft: '8px' }}
//   //           >
//   //             {<List data={users}></List>}
//   //           </Paper>
//   //         </Grid>
//   //       </Grid>
//   //     </Box>
//   //   </div>
//   // )
// }
