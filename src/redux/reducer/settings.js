import {
  SETTINGS_VIRTUALIZATION,
  SETTINGS_TABLE_COLUMNS
} from '../../config/constants'

const defaultState = {
  virtualization: true,
  columns: [
    {
      title: 'CHECKBOX',
      type: 'checkbox',
      width: '60px',
      display: true
    },
    {
      title: 'AVATAR',
      type: 'text',
      width: '70px',
      display: true
    },
    {
      title: 'NAME',
      type: 'text',
      sort: 'name',
      static: true,
      width: '180px',
      display: true
    },
    {
      title: 'CAR',
      type: 'text',
      sort: 'car',
      width: '150px',
      display: true
    },
    {
      title: 'TYPE',
      type: 'text',
      sort: 'type',
      width: '150px',
      display: true
    },
    {
      title: 'PRICE',
      type: 'text',
      sort: 'price',
      width: '100px',
      display: true
    },
    {
      title: 'ONLINE',
      type: 'text',
      sort: 'isOnline',
      width: '60px',
      display: true
    },
    {
      title: 'DATE',
      type: 'text',
      sort: 'date',
      width: '150px',
      display: true
    },
    {
      title: 'TEXT',
      type: 'text',
      sort: 'text',
      width: '536px',
      display: true
    }
  ]
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case SETTINGS_VIRTUALIZATION:
      return { ...state, virtualization: payload }
    case SETTINGS_TABLE_COLUMNS:
      return { ...state, columns: payload }
    default:
      return state
  }
}
