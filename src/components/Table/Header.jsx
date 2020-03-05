import React from 'react'
import { Box, Typography, Checkbox } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import styles from './style'
import { useDispatch, useSelector } from 'react-redux'
import { changeSortType } from '../../redux/action/sort'

const header = [
  {
    title: 'checkbox',
    type: 'checkbox',
    sort: null,
    class: 'checkbox'
  },
  {
    title: 'AVATAR',
    type: 'text',
    sort: null,
    class: 'avatar'
  },
  {
    title: 'NAME',
    type: 'text',
    sort: 'name',
    class: 'name'
  },
  {
    title: 'CAR',
    type: 'text',
    sort: 'car',
    class: 'car'
  },
  {
    title: 'TYPE',
    type: 'text',
    sort: 'type',
    class: 'type'
  },
  {
    title: 'PRICE',
    type: 'text',
    sort: 'price',
    class: 'price'
  },
  {
    title: 'ONLINE',
    type: 'text',
    sort: 'isOnline',
    class: 'online'
  },
  {
    title: 'DATE',
    type: 'text',
    sort: 'date',
    class: 'date'
  },
  {
    title: 'TEXT',
    type: 'text',
    sort: 'text',
    class: 'text'
  }
]

export default function Header({ index, style }) {
  const classes = styles()
  const dispatch = useDispatch()
  const {
    sort: { type, asc }
  } = useSelector(state => state.sort)
  const test = useSelector(state => state.sort)
  // let offsetLeft = useSelector(state => state.table.offsetLeft)
  // offsetLeft = offsetLeft > 130 ? offsetLeft - 130 : 0

  const renderSorting = rowType => {
    if (type !== rowType) {
      return null
    }

    switch (asc) {
      case 0:
        return null
      case 1:
        return <ArrowUpwardIcon className={classes.sortIcon} />
      case 2:
        return <ArrowDownwardIcon className={classes.sortIcon} />
      default:
        return null
    }
  }

  return (
    <Box style={style} className={`${classes.header} sticky`}>
      {header.map(data => {
        return (
          <Box
            key={data.title}
            className={`${classes.column} ${data.class} ${data.sort &&
              classes.sorted}`}
            onClick={event => {
              if (data.sort) {
                if (event.shiftKey) {
                } else {
                  dispatch(changeSortType(data.sort, asc + 1))
                }
              }
            }}
          >
            {(() => {
              switch (data.type) {
                case 'checkbox':
                  return <Checkbox className={classes.icon} />
                default:
                  return <Typography>{data.title}</Typography>
              }
            })()}
            {data.sort && renderSorting(data.sort)}
            {data.sort && data.sort !== type && (
              <ArrowUpwardIcon
                className={`${classes.sortHiddenIcon} ${classes.sortIcon}`}
              />
            )}
          </Box>
        )
      })}
    </Box>
  )
}
