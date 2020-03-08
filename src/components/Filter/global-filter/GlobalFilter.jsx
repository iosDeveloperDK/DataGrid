import React, { useState, useEffect } from 'react'
import { Typography, TextField, Grid } from '@material-ui/core'
import TextFieldFilter from '../textfield-filter/TextFieldFilter'
import { useDispatch, useSelector } from 'react-redux'
import { globalFilterChange } from '../../../redux/action/filter'

export default function GlobalFilter() {
  const dispatch = useDispatch()
  const { filter } = useSelector(state => state.filter)
  const [value, setValue] = useState(filter)
  console.log(filter)

  useEffect(() => {
    dispatch(globalFilterChange(value))
  }, [value, dispatch])

  useEffect(() => {
    console.log('render field', filter, value)
    setValue(filter)
  }, [filter])

  return (
    <Grid container>
      <Grid item sm={12}>
        <Typography color="primary" variant="overline">
          GLOBAL FILTER
        </Typography>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item sm={5}>
          <TextFieldFilter
            value={value}
            onChange={value => {
              setValue(value)
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
