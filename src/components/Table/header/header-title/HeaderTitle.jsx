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
  sort,
  type,
  title,
  handleShiftClick,
  handleClick
}) {
  const classes = styles()
  const { sort: sortes } = useSelector(state => state.sort)
  const { selectedRows } = useSelector(state => state.data)
  const dispatch = useDispatch()

  const renderSorting = type => {
    const sorting = _.find(sortes, { type })

    if (!sorting) {
      return null
    }

    return sorting.asc ? (
      <ArrowUpwardIcon className={classes.sortIcon} />
    ) : (
      <ArrowDownwardIcon className={classes.sortIcon} />
    )
  }

  const isSorting = type => _.find(sortes, { type })

  return (
    <div
      className={sort && classes.hover}
      style={{ display: 'flex' }}
      onClick={event => {
        if (event.shiftKey) {
          handleShiftClick()
        } else {
          handleClick()
        }
      }}
    >
      {(() => {
        switch (type) {
          case 'checkbox':
            return (
              <Checkbox
                className={classes.icon}
                onClick={() => {
                  dispatch(selectAllUsers(!selectedRows))
                }}
                checked={selectedRows}
              />
            )
          default:
            return <Typography>{title}</Typography>
        }
      })()}
      {sort && renderSorting(sort)}
      {sort && !isSorting(sort) && (
        <ArrowUpwardIcon
          className={`${classes.sortHiddenIcon} ${classes.sortIcon}`}
        />
      )}
    </div>
  )
}
