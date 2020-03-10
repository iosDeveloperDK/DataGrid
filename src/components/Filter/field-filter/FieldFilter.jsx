import React, { useState, useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import SelectFilter from '../select-filter/SelectFilter'
import TextFieldFilter from '../textfield-filter/TextFieldFilter'
import { useDispatch, useSelector } from 'react-redux'
import { fieldFilterChange } from '../../../redux/action/filter'
import _ from 'lodash'
import { FIELD_FILTER } from '../../../utils/constants'

export default function FieldFilter() {
  const dispatch = useDispatch()
  const { fieldFilter } = useSelector(state => state.filter)
  const key = Object.keys(fieldFilter)[0] || null
  const values = fieldFilter[key] || ''
  const [filter, setFilter] = useState(values)
  const [field, setField] = useState(key)
  const selectOptions = [
    { label: 'Name', value: 'name' },
    { label: 'Car', value: 'car' },
    { label: 'Type', value: 'type' },
    { label: 'Price', value: 'price' }
  ]

  const getSelectValue = () => {
    if (field) {
      return _.find(selectOptions, { value: field })
    } else {
      return null
    }
  }

  useEffect(() => {
    if (field && filter) {
      dispatch(fieldFilterChange({ [field]: filter }))
    } else if (field) {
      dispatch(fieldFilterChange({ [field]: filter }))
    }
  }, [filter, field, dispatch])

  useEffect(() => {
    if (fieldFilter) {
      setFilter(values)
      setField(key)
    }
  }, [fieldFilter, values, key])

  return (
    <Grid container>
      <Grid item sm={12}>
        <Typography color="primary" variant="overline">
          {FIELD_FILTER}
        </Typography>
      </Grid>
      <Grid item container spacing={2} alignItems="flex-start">
        <Grid item sm={5}>
          <TextFieldFilter
            value={filter}
            onChange={value => {
              setFilter(value)
            }}
          />
        </Grid>
        <Grid item sm={7}>
          <SelectFilter
            selectOptions={selectOptions}
            value={getSelectValue()}
            onChange={({ value }) => {
              setField(value)
            }}
            onClear={() => {
              setFilter('')
              setField(null)
              dispatch(fieldFilterChange({}))
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
