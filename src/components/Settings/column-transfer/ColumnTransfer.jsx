import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'
import { Typography, TextField, Grid } from '@material-ui/core'

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
    '& svg': {
      color: 'inherit'
    }
  }
}))

const columns = [
  { id: 'avatar', title: 'Avatar' },
  { id: 'name', title: 'Name' },
  { id: 'car', title: 'Car' },
  { id: 'type', title: 'Type' },
  { id: 'price', title: 'Price' },
  { id: 'online', title: 'Online' },
  { id: 'date', title: 'Date' },
  { id: 'text', title: 'Text' }
]

export default function ColumnTransfer() {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item sm={12}>
        <Typography color="primary" variant="overline">
          COLUMNS
        </Typography>
      </Grid>
      <Grid item container>
        {columns.map(({ id, title }) => (
          <Grid item sm={2}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox className={classes.checkbox} />}
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
