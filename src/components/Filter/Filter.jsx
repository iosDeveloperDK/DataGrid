import React from 'react'
import { Box, Typography, Grid } from '@material-ui/core'
import FieldFilter from './field-filter/FieldFilter'
import EnumFilter from './enum-filter/EnumFilter'
import GlobalFilter from './global-filter/GlobalFilter'
import ToggleFilter from './toggle-filter/ToggleFilter'

export default function Filter() {
  return (
    <Grid container direction="column" style={{ padding: '16px' }} spacing={2}>
      <Grid item sm={12}>
        <Box color="text.main">
          <Typography variant="h5">FILTERS</Typography>
        </Box>
      </Grid>
      <Grid item sm={12}>
        <FieldFilter />
      </Grid>
      <Grid item sm={12}>
        <GlobalFilter />
      </Grid>
      <Grid item sm={12}>
        <EnumFilter />
      </Grid>
      <Grid item sm={12}>
        <ToggleFilter />
      </Grid>
    </Grid>
  )
}
