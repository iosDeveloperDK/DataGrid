import React, { useState, useEffect } from 'react'
import { Typography, TextField, Grid } from '@material-ui/core'
import SwitchFilter from '../../Filter/switch-filter/SwitchFilter'
import { useDispatch } from 'react-redux'
import { settingsVirtualizationChange } from '../../../redux/action/settings'

export default function ToggleVirtualization() {
  const dispatch = useDispatch()
  const [virtualization, setVirtualization] = useState(true)

  useEffect(() => {
    dispatch(settingsVirtualizationChange(virtualization))
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
          <SwitchFilter
            checked={virtualization}
            label="Enable virtualization"
            onChange={() => {
              setVirtualization(!virtualization)
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
