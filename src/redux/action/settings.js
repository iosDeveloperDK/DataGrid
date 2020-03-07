import {
  SETTINGS_VIRTUALIZATION,
  SETTINGS_TABLE_COLUMNS
} from '../../config/constants'

export const settingsVirtualizationChange = virtualization => {
  return {
    type: SETTINGS_VIRTUALIZATION,
    payload: virtualization
  }
}

export const settingsColumnsChange = columns => {
  return {
    type: SETTINGS_TABLE_COLUMNS,
    payload: columns
  }
}
