import React, { useState, useEffect } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { settingsVirtualizationChange } from '../../../redux/action/settings'
import SelectFilter from '../../Filter/select-filter/SelectFilter'

export default function ToggleVirtualization() {
  const dispatch = useDispatch()
  const [virtualization, setVirtualization] = useState({
    label: 'react-window',
    value: 0
  })
  const selectOptions = [
    { label: 'react-window', value: 0 },
    { label: 'custom-virtualization', value: 1 },
    { label: 'simple-table', value: 2 }
  ]
  useEffect(() => {
    dispatch(settingsVirtualizationChange(virtualization.value))
  }, [virtualization, dispatch])

  return (
    <Grid container>
      <Grid item sm={12}>
        <Typography color="primary" variant="overline">
          VIRTUALIZATION
        </Typography>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item sm={12}>
          <SelectFilter
            isClearable={false}
            selectOptions={selectOptions}
            value={virtualization}
            onChange={value => {
              setVirtualization(value)
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
