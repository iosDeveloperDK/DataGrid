import React from 'react'
import { Typography, TextField, Grid } from '@material-ui/core'
import SwitchFilter from '../../Filter/switch-filter/SwitchFilter'

export default function ToggleVirtualization() {
  return (
    <Grid container>
      <Grid item sm={12}>
        <Typography color="primary" variant="overline">
          VIRTUALIZATION
        </Typography>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item sm={12}>
          <SwitchFilter label="Enable virtualization" onChange={() => {}} />
        </Grid>
      </Grid>
    </Grid>
  )
}
