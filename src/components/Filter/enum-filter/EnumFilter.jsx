import React, { useState, useEffect } from 'react'
import { Typography, TextField, Grid } from '@material-ui/core'
import SelectFilter from '../select-filter/SelectFilter'
import { useDispatch } from 'react-redux'
import { enumFilterChange } from '../../../redux/action/filter'

export default function EnumFilter() {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState([])
  const selectOptions = [
    { label: 'Admin', value: 'Admin' },
    { label: 'Student', value: 'Student' },
    { label: 'Worker', value: 'Worker' },
    { label: 'Mentor', value: 'Mentor' }
  ]

  useEffect(() => {
    if (filter.length) {
      dispatch(enumFilterChange(filter))
    } else {
      dispatch(enumFilterChange([]))
    }
  }, [filter, dispatch])

  return (
    <Grid container>
      <Grid item sm={12}>
        <Typography color="primary" variant="overline">
          ENUM FILTER
        </Typography>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item sm={12}>
          <SelectFilter
            selectOptions={selectOptions}
            isMulti
            onChange={filter => {
              if (filter) {
                setFilter(filter.map(({ value }) => value))
              } else {
                setFilter([])
              }
            }}
            onClear={() => {
              console.log('clear')
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
