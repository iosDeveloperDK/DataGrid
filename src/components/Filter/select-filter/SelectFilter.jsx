import React from 'react'
import Select from 'react-select'
import styles from './style'

export default function SelectFilter({
  onChange,
  onClear,
  value,
  isMulti,
  selectOptions
}) {
  return (
    <Select
      options={selectOptions}
      styles={styles()}
      isMulti={isMulti}
      placeholder="Field"
      isClearable
      onChange={(value, { action }) => {
        console.log(action)
        if (value && action === 'select-option') {
          onChange(value)
        } else if (action === 'clear') {
          onClear()
        } else if (action === 'remove-value') {
          console.log(value)
          onChange(value)
        }
      }}
    />
  )
}
