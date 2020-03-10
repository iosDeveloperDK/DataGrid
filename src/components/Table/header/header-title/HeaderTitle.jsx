import React from 'react'
import styles from './style'
import _ from 'lodash'
import { Typography, Checkbox } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { selectAllUsers } from '../../../../redux/action/users'

export default function HeaderTitle({
  sort: selectSort,
  type,
  title,
  handleShiftClick,
  handleClick
}) {
  const classes = styles()
  const { sort } = useSelector(state => state.sort)
  const { selectedRows } = useSelector(state => state.data)
  const dispatch = useDispatch()

  const renderSorting = type => {
    const sorting = _.find(sort, { type })

    if (!sorting) {
      return null
    }

    return sorting.asc ? (
      <ArrowUpwardIcon className={classes.sortIcon} />
    ) : (
      <ArrowDownwardIcon className={classes.sortIcon} />
    )
  }

  const isSorting = type => _.find(sort, { type })

  return (
    <div
      className={selectSort && classes.hover}
      style={{ display: 'flex' }}
      onClick={event => {
        if (selectSort) {
          if (event.shiftKey) {
            handleShiftClick()
          } else {
            handleClick()
          }
        }
      }}
    >
      {(() => {
        switch (type) {
          case 'checkbox':
            return (
              <Checkbox
                className={`${
                  selectedRows === 1 ? classes.iconSelected : classes.icon
                }`}
                onClick={() => {
                  if (selectedRows === 1) {
                    dispatch(selectAllUsers(2))
                  } else {
                    dispatch(selectAllUsers(1))
                  }
                }}
                checked={selectedRows === 1}
              />
            )
          default:
            return <Typography>{title}</Typography>
        }
      })()}
      {selectSort && renderSorting(selectSort)}
      {selectSort && !isSorting(selectSort) && (
        <ArrowUpwardIcon
          className={`${classes.sortHiddenIcon} ${classes.sortIcon}`}
        />
      )}
    </div>
  )
}
