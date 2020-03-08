import React, { useState } from 'react'
import styles from './style'
import _ from 'lodash'
import SearchIcon from '@material-ui/icons/Search'
import HeaderSearch from './HeaderSearch'
import { useSelector } from 'react-redux'

export default function HeaderSearchIcon({ sort, handleClick, width }) {
  const classes = styles()
  const [open, setOpen] = useState(false)
  const { search } = useSelector(state => state.filter)
  const isSort = _.find(search, { id: sort })

  return (
    <>
      <SearchIcon
        fontSize="small"
        className={`${classes.searchIcon} ${isSort && classes.active}`}
        onClick={() => {
          setOpen(!open)
        }}
      />
      <HeaderSearch
        width={width}
        open={open}
        handleSearch={search => {
          // dispatch(searchFilterChange([{ search, id: sort }]));
        }}
        handleClear={() => {
          setOpen(false)
          // dispatch(searchFilterChange({ search, id: sort }));
        }}
      />
    </>
  )
}
