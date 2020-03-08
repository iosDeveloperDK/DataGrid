import React, { useState, useEffect } from 'react'
import { Typography, TextField, Grid } from '@material-ui/core'
import SelectFilter from '../select-filter/SelectFilter'
import { useDispatch, useSelector } from 'react-redux'
import { enumFilterChange } from '../../../redux/action/filter'
import _ from 'lodash'

export default function EnumFilter() {
  const dispatch = useDispatch()
  const { enum: object } = useSelector(state => state.filter)

  const [filter, setFilter] = useState(object)
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
            value={selectOptions.filter(option =>
              object.includes(option.value)
            )}
            isMulti
            onChange={filter => {
              if (filter) {
                setFilter(filter.map(({ value }) => value))
              } else {
                setFilter([])
              }
            }}
            onClear={() => {
              setFilter([])
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
