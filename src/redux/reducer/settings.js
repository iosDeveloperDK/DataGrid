import {
  SETTINGS_VIRTUALIZATION,
  SETTINGS_TABLE_COLUMNS
} from '../../config/constants'

const defaultState = {
  virtualization: 0,
  columns: [
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
      minWidth: 60,
      display: true
    },
    {
      id: 'name',
      title: 'NAME',
      type: 'text',
      sort: 'name',
      static: true,
      width: '180px',
      minWidth: 180,
      display: true
    },
    {
      id: 'car',
      title: 'CAR',
      type: 'text',
      sort: 'car',
      width: '110px',
      minWidth: 110,
      display: true
    },
    {
      id: 'type',
      title: 'TYPE',
      type: 'text',
      sort: 'type',
      width: '80px',
      minWidth: 80,
      display: true
    },
    {
      id: 'price',
      title: 'PRICE',
      type: 'text',
      sort: 'price',
      width: '80px',
      minWidth: 80,
      display: true
    },
    {
      id: 'isOnline',
      title: 'ONLINE',
      type: 'text',
      sort: 'isOnline',
      width: '60px',
      minWidth: 60,
      display: true
    },
    {
      id: 'date',
      title: 'DATE',
      type: 'text',
      sort: 'date',
      width: '100px',
      minWidth: 100,
      display: true
    },
    {
      id: 'text',
      title: 'TEXT',
      type: 'text',
      sort: 'text',
      width: '700px',
      minWidth: 700,
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
