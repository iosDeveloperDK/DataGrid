import React from 'react'
import { Box, Typography, Grid, Button } from '@material-ui/core'
import FieldFilter from './field-filter/FieldFilter'
import EnumFilter from './enum-filter/EnumFilter'
import SearchFilter from './search-filter/SearchFilter'
import ToggleFilter from './toggle-filter/ToggleFilter'
import { useDispatch } from 'react-redux'
import { clearFilters } from '../../redux/action/filter'

export default function Filter() {
  const dispatch = useDispatch()

  return (
    <Grid container direction="column" style={{ padding: '16px' }} spacing={1}>
      <Grid item sm={12}>
        <Box color="text.main">
          <Typography variant="h5">FILTERS</Typography>
        </Box>
      </Grid>
      <Grid item sm={12}>
        <FieldFilter />
      </Grid>
      <Grid item sm={12}>
        <SearchFilter />
      </Grid>
      <Grid item sm={12}>
        <EnumFilter />
      </Grid>
      <Grid item sm={12}>
        <ToggleFilter />
      </Grid>
      <Grid item sm={12}>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => dispatch(clearFilters())}
        >
          CLEAR FILTERS
        </Button>
      </Grid>
    </Grid>
  )
}
