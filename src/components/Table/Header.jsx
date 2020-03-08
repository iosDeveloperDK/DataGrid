import React, { useState } from 'react'
import { Box, Typography, Checkbox, Paper } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import styles from './style'
import { useDispatch, useSelector } from 'react-redux'
import { changeSortType, changeMultipleSortType } from '../../redux/action/sort'
import _ from 'lodash'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { searchFilterChange } from '../../redux/action/filter'
import HeaderTitle from './header/header-title/HeaderTitle'
import HeaderSearchIcon from './header/header-search/HeaderSearchIcon'
import HeaderSearch from './header/header-search/HeaderSearch'

export default function Header({ index, style }) {
  const classes = styles()
  const dispatch = useDispatch()
  const { sort } = useSelector(state => state.sort)
  const { columns } = useSelector(state => state.settings)
  let offsetLeft = useSelector(state => state.table.offsetLeft)
  offsetLeft = offsetLeft > 160 ? offsetLeft - 160 : 0

  const addSort = type => {
    const sorting = _.find(sort, { type })

    if (!sorting) {
      return [{ type, asc: true }]
    } else {
      if (sorting.asc) {
        return [{ type, asc: false }]
      } else {
        return []
      }
    }
  }

  const addMultipleSort = type => {
    const sorting = _.find(sort, { type })

    if (!sorting) {
      return [...sort, { type, asc: true }]
    } else {
      if (sorting.asc) {
        return _.map(sort, function(sort) {
          return sort.type === type ? { type, asc: false } : sort
        })
      } else {
        return _.map(sort, function(sort) {
          return sort.type === type ? [] : sort
        })
      }
    }
  }

  return (
    <>
      <div style={style} className={`${classes.header} sticky`}>
        {columns
          .filter(column => column.display)
          .map(data => {
            return (
              <div
                key={data.title}
                style={{
                  position: data.static ? 'sticky' : 'relative',
                  left: '0px',
                  zIndex: data.static ? 4 : 1
                }}
              >
                <div
                  className={`${classes.column}`}
                  style={{ width: data.width }}
                >
                  <HeaderTitle
                    {...data}
                    handleClick={() =>
                      dispatch(changeSortType(addSort(data.sort)))
                    }
                    handleShiftClick={() =>
                      dispatch(
                        changeMultipleSortType(addMultipleSort(data.sort))
                      )
                    }
                  />
                  {data.search && <HeaderSearchIcon {...data} />}
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
}
