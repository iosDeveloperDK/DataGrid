import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import _ from 'lodash'
import { CSVLink } from 'react-csv'
import { Link } from 'react-router-dom'
import styles from './style'

export default function OtherSettings({ columns, offset = 0, data }) {
  const classes = styles()
  const columnID = columns.map(
    column => column.id !== 'checkbox' && column.display
  )
  console.log(columnID)

  const csvData = () => {
    return _.slice(
      data,
      Math.floor(offset / 56),
      13 + Math.floor(offset / 56)
    ).map(user => ({
      ...user,
      isOnline: user.isOnline ? 'Yes' : 'No'
    }))
  }

  const csvColumns = () => {
    return columns
      .filter(column => column.id !== 'checkbox' && column.display)
      .map(column => ({
        label: column.title,
        key: column.id
      }))
  }

  const renderCSVLink = () => {
    if (csvData().length) {
      return (
        <Grid item sm={6} xs={6}>
          <CSVLink
            key={csvColumns().length}
            className={classes.link}
            filename={'data-grid.csv'}
            data={csvData()}
            headers={csvColumns()}
          >
            CSV EXAMPLE
          </CSVLink>
        </Grid>
      )
    }
    return null
  }

  return (
    <Grid container spacing={1}>
      <Grid item sm={12} xs={12}>
        <Typography color="primary" variant="overline">
          OTHERS
        </Typography>
      </Grid>
      <Grid item container spacing={1}>
        <Grid item sm={6} xs={6}>
          <Link className={classes.link} to="/?enum=Worker&text=Miss">
            QUERYSTRING EXAMPLE
          </Link>
        </Grid>
        {renderCSVLink()}
      </Grid>
    </Grid>
  )
}
