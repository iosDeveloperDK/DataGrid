import React, { useState, useEffect } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFilterChange } from '../../../redux/action/filter'
import SwitchFilter from '../switch-filter/SwitchFilter'
import { TOGGLE_FILTER } from '../../../utils/constants'

export default function ToggleFilter() {
  const dispatch = useDispatch()
  const { toggleFilter } = useSelector(state => state.filter)
  const onlineToggle = toggleFilter === null ? false : toggleFilter
  const offlineToggle = toggleFilter === null ? false : !toggleFilter

  const [online, setOnline] = useState(onlineToggle)
  const [offline, setOffline] = useState(offlineToggle)

  useEffect(() => {
    if (!online && !offline) {
      dispatch(toggleFilterChange(null))
    } else {
      dispatch(toggleFilterChange(online && !offline))
    }
  }, [online, offline, dispatch])

  useEffect(() => {
    setOnline(onlineToggle)
    setOffline(offlineToggle)
  }, [toggleFilter, onlineToggle, offlineToggle])

  return (
    <Grid container>
      <Grid item sm={12}>
        <Typography color="primary" variant="overline">
          {TOGGLE_FILTER}
        </Typography>
      </Grid>
      <Grid container item sm={12} spacing={2}>
        <Grid item sm={3}>
          <SwitchFilter
            label="Online"
            checked={online}
            onChange={() => {
              setOnline(!online)
              setOffline(false)
            }}
          />
        </Grid>
        <Grid item sm={4}>
          <SwitchFilter
            label="Offline"
            checked={offline}
            onChange={() => {
              setOnline(false)
              setOffline(!offline)
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
