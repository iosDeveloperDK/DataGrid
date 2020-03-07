import React from 'react'
import { Box, Typography, Grid } from '@material-ui/core'
import ColumnTransfer from './column-transfer/ColumnTransfer'
import ToggleVirtualization from './toggle-virtualization/ToggleVirtualization'
// import FieldFilter from './field-filter/FieldFilter'
// import EnumFilter from './enum-filter/EnumFilter'
// import GlobalFilter from './global-filter/GlobalFilter'
// import ToggleFilter from './toggle-filter/ToggleFilter'

export default function Settings() {
  return (
    <Grid container direction="column" style={{ padding: '16px' }} spacing={2}>
      <Grid item sm={12}>
        <Box color="text.main">
          <Typography variant="h5">SETTINGS</Typography>
        </Box>
      </Grid>
      <Grid item sm={12}>
        <ToggleVirtualization />
      </Grid>
      <Grid item sm={12}>
        <ColumnTransfer />
      </Grid>
    </Grid>
  )
}
