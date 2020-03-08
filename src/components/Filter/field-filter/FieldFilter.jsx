import React, { useState, useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import SelectFilter from '../select-filter/SelectFilter'
import TextFieldFilter from '../textfield-filter/TextFieldFilter'
import { useDispatch, useSelector } from 'react-redux'
import { fieldFilterChange } from '../../../redux/action/filter'
import _ from 'lodash'

export default function FieldFilter() {
  const dispatch = useDispatch()
  const { field: object } = useSelector(state => state.filter)

  const [filter, setFilter] = useState(object[Object.keys(object)[0]])
  const [field, setField] = useState(Object.keys(object)[0])
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
    } else {
      dispatch(fieldFilterChange({}))
    }
  }, [filter, field, dispatch])

  useEffect(() => {
    if (_.isEmpty(object) && filter && field) {
      setFilter('')
      setField(null)
    }
  }, [object])

  console.log('redndet', filter, field, _.find(selectOptions, { value: field }))

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
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
