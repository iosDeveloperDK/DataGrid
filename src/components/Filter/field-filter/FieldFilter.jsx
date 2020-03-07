import React, { useState, useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import SelectFilter from '../select-filter/SelectFilter'
import TextFieldFilter from '../textfield-filter/TextFieldFilter'
import { useDispatch } from 'react-redux'
import { fieldFilterChange } from '../../../redux/action/filter'

export default function FieldFilter() {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState('')
  const [field, setField] = useState(null)
  const selectOptions = [
    { label: 'Name', value: 'name' },
    { label: 'Car', value: 'car' },
    { label: 'Type', value: 'type' },
    { label: 'Price', value: 'price' }
  ]

  useEffect(() => {
    if (field && filter) {
      dispatch(fieldFilterChange({ [field]: filter }))
    } else {
      dispatch(fieldFilterChange({}))
    }
  }, [filter, field, dispatch])

  return (
    <Grid container>
      <Grid item sm={12}>
        <Typography color="primary" variant="overline">
          FIELD FILTER
        </Typography>
      </Grid>
      <Grid item container spacing={2} alignItems="flex-start">
        <Grid item sm={5}>
          <TextFieldFilter
            value={filter}
            onChange={({ value }) => {
              setFilter(value)
            }}
          />
        </Grid>
        <Grid item sm={7}>
          <SelectFilter
            selectOptions={selectOptions}
            value={field}
            onChange={field => {
              setField(field)
            }}
            onClear={() => {
              setFilter('')
              setField(null)
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
