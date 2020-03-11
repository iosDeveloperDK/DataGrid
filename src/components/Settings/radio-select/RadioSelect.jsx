import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { Typography } from '@material-ui/core'
import styles from './style'

export default function RadioSelect({ options, value, onChange }) {
  const classes = styles()

  return (
    <RadioGroup
      value={value}
      onChange={event => onChange(event.target.value)}
      row
    >
      {options.map((option, index) => (
        <FormControlLabel
          className={classes.label}
          key={index}
          value={index}
          control={<Radio className={classes.radio} />}
          label={<Typography className={classes.label}>{option}</Typography>}
        />
      ))}
    </RadioGroup>
  )
}
