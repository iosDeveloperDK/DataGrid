import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/action/users'
import List from './Table/List'
import { Paper, Grid, Box, Typography, withStyles } from '@material-ui/core'
import { enumFilterChange, searchFilterChange } from '../redux/action/filter'
import Filter from './Filter/Filter'
import Settings from './Settings/Settings'
import { TASK_NAME } from '../utils/constants'
import usersSelector from '../selectors'

// const containerHeight = 828
const styles = {
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    margin: ' auto',
    width: '100%',
    height: '100vh'
  },
  content: {
    height: 'calc(100% - 32px)'
  },
  paper: {
    boxShadow: `0px 0px 10px 0px rgba(157,153,214,0.2)`,
    overflow: 'hidden',
    height: 'calc(100% - 0px)'
  }
}

class Root extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const { users, classes } = this.props

    return (
      <Box className={classes.container}>
        <Box width="100vw" height="100vh">
          <Box height="100%">
            <Grid container style={{ height: '100%', padding: '16px' }}>
              <Grid item sm={4} xs={12}>
                <Box className={classes.content}>
                  <Typography color="primary" variant="overline">
                    {TASK_NAME}
                  </Typography>
                  <Paper
                    className={classes.paper}
                    style={{
                      marginRight: '8px'
                    }}
                  >
                    <Filter />
                    <Settings data={users} />
                  </Paper>
                </Box>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Box className={classes.content}>
                  <Typography
                    color="primary"
                    variant="overline"
                    style={{
                      marginLeft: '8px'
                    }}
                  >
                    {`Found: ${users.length} users`}
                  </Typography>
                  <Paper
                    className={classes.paper}
                    style={{
                      marginLeft: '8px'
                    }}
                  >
                    {<List data={users}></List>}
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    )
  }
}

const mapDispatchToProps = {
  fetchUsers,
  enumFilterChange,
  searchFilterChange
}

const mapStateToProps = state => ({
  users: usersSelector(state),
  router: state.router
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Root))
