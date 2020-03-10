import React, { useState, useEffect } from 'react'
import { Typography, Grid } from '@material-ui/core'
import TextFieldFilter from '../textfield-filter/TextFieldFilter'
import { useDispatch, useSelector } from 'react-redux'
import { searchFilterChange } from '../../../redux/action/filter'
import { SEARCH_FILTER } from '../../../utils/constants'

export default function SearchFilter() {
  const dispatch = useDispatch()
  const { searchFilter } = useSelector(state => state.filter)
  const [value, setValue] = useState(searchFilter)

  useEffect(() => {
    dispatch(searchFilterChange(value))
  }, [value, dispatch])

  useEffect(() => {
    setValue(searchFilter)
  }, [searchFilter])

  return (
    <Grid container>
      <Grid item sm={12}>
        <Typography color="primary" variant="overline">
          {SEARCH_FILTER}
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
