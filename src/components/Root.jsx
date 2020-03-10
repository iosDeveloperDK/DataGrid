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

const containerHeight = 828
const styles = {
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    margin: ' auto',
    width: '100%',
    height: '100%'
  },
  paper: {
    boxShadow: `0px 0px 10px 0px rgba(157,153,214,0.2)`,
    overflow: 'hidden',
    height: '100%'
  }
}

class Root extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const { users, classes } = this.props

    return (
      <div className={classes.container}>
        <Box p={2} width="100%">
          <Typography color="primary" variant="overline">
            {TASK_NAME}
          </Typography>
          <Box height={`${containerHeight}px`}>
            <Grid container>
              <Grid item sm={4}>
                <Paper
                  className={classes.paper}
                  style={{
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
                    marginLeft: '8px'
                  }}
                >
                  {<List data={users}></List>}
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
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
