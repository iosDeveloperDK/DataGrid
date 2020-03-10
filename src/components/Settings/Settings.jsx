import React from 'react'
import { Box, Typography, Grid } from '@material-ui/core'
import ColumnTransfer from './column-transfer/ColumnTransfer'
import ToggleVirtualization from './toggle-virtualization/ToggleVirtualization'
import { useSelector } from 'react-redux'
import OtherSettings from './others/OtherSettings'

export default function Settings({ data }) {
  const { users } = useSelector(state => state.data)
  const { columns } = useSelector(state => state.settings)
  const { offset } = useSelector(state => state.table)

  return (
    <Grid container direction="column" style={{ padding: '16px' }} spacing={1}>
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
      <Grid item sm={12}>
        <OtherSettings data={users} columns={columns} offset={offset} />
      </Grid>
    </Grid>
  )
}
