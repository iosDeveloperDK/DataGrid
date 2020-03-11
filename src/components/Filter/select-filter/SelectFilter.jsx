import React from 'react'
import Select from 'react-select'
import styles from './style'

export default function SelectFilter({
  onChange,
  onClear,
  value,
  isMulti,
  selectOptions,
  isClearable = true
}) {
  return (
    <Select
      value={value}
      options={selectOptions}
      styles={styles()}
      isMulti={isMulti}
      placeholder="Field"
      isClearable={isClearable}
      onChange={(value, { action }) => {
        if (value && action === 'select-option') {
          onChange(value)
        } else if (action === 'clear') {
          onClear()
        } else if (action === 'remove-value') {
          onChange(value)
        }
      }}
    />
  )
}
