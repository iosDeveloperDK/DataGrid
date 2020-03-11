import React, { useState, useEffect } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { settingsVirtualizationChange } from '../../../redux/action/settings'
import RadioSelect from '../radio-select/RadioSelect'

export default function ToggleVirtualization() {
  const dispatch = useDispatch()
  const options = ['react-window', 'custom-virtualization', 'simple-table']
  const [virtualization, setVirtualization] = useState(0)

  useEffect(() => {
    dispatch(settingsVirtualizationChange(virtualization))
  }, [virtualization, dispatch])

  return (
    <Grid container>
      <Grid item sm={12} xs={12}>
        <Typography color="primary" variant="overline">
          VIRTUALIZATION
        </Typography>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item sm={12} xs={12}>
          <RadioSelect
            value={virtualization}
            options={options}
            onChange={value => {
              setVirtualization(parseInt(value))
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
