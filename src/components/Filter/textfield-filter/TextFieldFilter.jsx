import React from 'react'
import styles from './style'
import { TextField } from '@material-ui/core'

export default function TextFieldFilter({ onChange, value }) {
  const classes = styles()

  return (
    <TextField
      margin="dense"
      placeholder="Search"
      variant="outlined"
      fullWidth
      type="search"
      value={value}
      InputProps={{
        classes: {
          input: classes.input,
          root: classes.outlinedRoot,
          notchedOutline: classes.notchedOutline,
          focused: classes.focused
        }
      }}
      onChange={event => onChange(event.target.value)}
    />
  )
}
