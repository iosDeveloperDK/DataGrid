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
    class: 'name',
    static: true,
    search: true
  },
  {
    title: 'CAR',
    type: 'text',
    sort: 'car',
    class: 'car',
    search: true
  },
  {
    title: 'TYPE',
    type: 'text',
    sort: 'type',
    class: 'type',
    search: true
  },
  {
    title: 'PRICE',
    type: 'text',
    sort: 'price',
    class: 'price',
    search: true
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

const searchData = [
  {
    id: 'name',
    width: '205px',
    left: '140px'
  },
  {
    id: 'car',
    width: '205px',
    left: '340px'
  },
  {
    id: 'type',
    width: '205px',
    left: '540px'
  },
  {
    id: 'price',
    width: '205px',
    left: '740px'
  }
]

export default function Header({ index, style }) {
  const classes = styles()
  const dispatch = useDispatch()
  const [searchState, setSearch] = useState({
    name: { search: '', open: false },
    car: { search: '', open: false },
    type: { search: '', open: false },
    price: { search: '', open: false }
  })
  const { sort } = useSelector(state => state.sort)
  let offsetLeft = useSelector(state => state.table.offsetLeft)
  offsetLeft = offsetLeft > 130 ? offsetLeft - 130 : 0

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

  const isSorting = type => _.find(sort, { type })

  return (
    <>
      <div style={style} className={`${classes.header} sticky`}>
        {header.map(data => {
          return (
            <div
              key={data.title}
              className={`${classes.column}`}
              style={
                data.static && { position: 'relative', left: `${offsetLeft}px` }
              }
            >
              <div
                className={`${classes.column} ${data.class} ${data.sort &&
                  classes.sorted}`}
                onClick={event => {
                  if (event.shiftKey) {
                    dispatch(changeMultipleSortType(addMultipleSort(data.sort)))
                  } else {
                    dispatch(changeSortType(addSort(data.sort)))
                  }
                }}
              >
                <div style={{ display: 'flex' }}>
                  {(() => {
                    switch (data.type) {
                      case 'checkbox':
                        return <Checkbox className={classes.icon} />
                      default:
                        return <Typography>{data.title}</Typography>
                    }
                  })()}
                  {data.sort && renderSorting(data.sort)}
                  {data.sort && !isSorting(data.sort) && (
                    <ArrowUpwardIcon
                      className={`${classes.sortHiddenIcon} ${classes.sortIcon}`}
                    />
                  )}
                </div>
                {data.search && (
                  <IconButton
                    className={classes.search}
                    onClick={() => {
                      console.log(searchState)
                      setSearch({
                        ...searchState,
                        [data.sort]: {
                          ...searchState[data.sort],
                          open: !searchState[data.sort].open
                        }
                      })
                    }}
                  >
                    <SearchIcon fontSize="small" />
                  </IconButton>
                )}
              </div>
            </div>
          )
        })}
        {searchData.map(({ id, left, width }) => {
          const { open, search } = searchState[id]
          if (open) {
            return (
              <Paper
                key={id}
                className={classes.searchPaper}
                style={{
                  left: left,
                  width: width
                }}
              >
                <TextField
                  variant="outlined"
                  size="small"
                  label="Search"
                  fullWidth
                  type="search"
                  value={search}
                  onChange={event => {
                    setSearch({
                      ...searchState,
                      [id]: {
                        ...searchState[id],
                        search: event.target.value
                      }
                    })
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    paddingTop: '10px'
                  }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    className={classes.searchButton}
                    onClick={() => dispatch(searchFilterChange({ search, id }))}
                  >
                    Search
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    className={classes.clearButton}
                  >
                    Clear
                  </Button>
                </div>
              </Paper>
            )
          }
        })}
      </div>
    </>
  )
}
