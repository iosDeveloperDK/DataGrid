import React, { useState, useEffect } from 'react'
import { Typography, TextField, Grid } from '@material-ui/core'
import TextFieldFilter from '../textfield-filter/TextFieldFilter'
import { useDispatch } from 'react-redux'
import { globalFilterChange } from '../../../redux/action/filter'

export default function GlobalFilter() {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState('')

  useEffect(() => {
    if (filter) {
      dispatch(globalFilterChange(filter))
    }
  }, [filter, dispatch])

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
            onChange={({ value }) => {
              setFilter(value)
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
