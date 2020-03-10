import React, { useState, useEffect } from 'react'
import { Typography, Grid } from '@material-ui/core'
import SelectFilter from '../select-filter/SelectFilter'
import { useDispatch, useSelector } from 'react-redux'
import { enumFilterChange } from '../../../redux/action/filter'
import { ENUM_FILTER } from '../../../utils/constants'

export default function EnumFilter() {
  const dispatch = useDispatch()
  const { enumFilter } = useSelector(state => state.filter)
  const [filter, setFilter] = useState(enumFilter)
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
          {ENUM_FILTER}
        </Typography>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item sm={12} xs={12}>
          <SelectFilter
            selectOptions={selectOptions}
            value={selectOptions.filter(option =>
              enumFilter.includes(option.value)
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
