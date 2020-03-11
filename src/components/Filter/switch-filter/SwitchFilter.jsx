import React from 'react'
import styles from './style'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import { Typography } from '@material-ui/core'

export default function SwitchFilter({ checked, label, onChange }) {
  const classes = styles()

  return (
    <FormControlLabel
      className={classes.label}
      control={
        <Switch
          classes={{
            root: classes.root,
            switchBase: classes.switchBase,
            thumb: classes.thumb,
            track: classes.track,
            checked: classes.checked
          }}
          checked={checked}
          onChange={() => onChange()}
        />
      }
      label={<Typography className={classes.label}>{label}</Typography>}
    />
  )
}
