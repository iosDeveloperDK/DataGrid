import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { Typography, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { settingsColumnsChange } from '../../../redux/action/settings'
import _ from 'lodash'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  formControl: {},
  label: {
    color: theme.palette.text.main,
    fontSize: '12px !important',
    fontWeight: 300
  },
  checkbox: {
    color: theme.palette.primary.main,
    zIndex: 0,
    '& svg': {
      color: 'inherit'
    }
  }
}))

export default function ColumnTransfer() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { columns } = useSelector(state => state.settings)

  const checkboxChange = title => {
    var newColumns = _.map(columns, column => {
      return column.title === title
        ? { ...column, display: !column.display }
        : column
    })
    dispatch(settingsColumnsChange(newColumns))
  }

  return (
    <Grid container>
      <Grid item sm={12}>
        <Typography color="primary" variant="overline">
          COLUMNS
        </Typography>
      </Grid>
      <Grid item container>
        {columns.map(({ title, display }) => (
          <Grid item key={title}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    className={classes.checkbox}
                    checked={display}
                    onClick={() => checkboxChange(title)}
                  />
                }
                className={classes.label}
                label={
                  <Typography className={classes.label}>{title}</Typography>
                }
              />
            </FormGroup>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
