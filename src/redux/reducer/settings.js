import {
  SETTINGS_VIRTUALIZATION,
  SETTINGS_TABLE_COLUMNS
} from '../../config/constants'

const defaultState = {
  virtualization: true,
  columns: JSON.parse(localStorage.getItem('columns')) || [
    {
      id: 'checkbox',
      title: 'CHECKBOX',
      type: 'checkbox',
      width: '50px',
      display: true
    },
    {
      id: 'avatar',
      title: 'AVATAR',
      type: 'text',
      width: '60px',
      display: true
    },
    {
      id: 'name',
      title: 'NAME',
      type: 'text',
      sort: 'name',
      static: true,
      width: '180px',
      display: true
    },
    {
      id: 'car',
      title: 'CAR',
      type: 'text',
      sort: 'car',
      width: '110px',
      display: true
    },
    {
      id: 'type',
      title: 'TYPE',
      type: 'text',
      sort: 'type',
      width: '80px',
      display: true
    },
    {
      id: 'price',
      title: 'PRICE',
      type: 'text',
      sort: 'price',
      width: '80px',
      display: true
    },
    {
      id: 'isOnline',
      title: 'ONLINE',
      type: 'text',
      sort: 'isOnline',
      width: '60px',
      display: true
    },
    {
      id: 'date',
      title: 'DATE',
      type: 'text',
      sort: 'date',
      width: '150px',
      display: true
    },
    {
      id: 'text',
      title: 'TEXT',
      type: 'text',
      sort: 'text',
      width: '636px',
      display: true
    }
  ]
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case SETTINGS_VIRTUALIZATION:
      return { ...state, virtualization: payload }
    case SETTINGS_TABLE_COLUMNS:
      localStorage.setItem('columns', JSON.stringify(payload))
      return { ...state, columns: payload }
    default:
      return state
  }
}
