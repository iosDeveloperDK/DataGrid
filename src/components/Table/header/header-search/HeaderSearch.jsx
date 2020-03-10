import React, { useState } from 'react'
import styles from './style'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Paper } from '@material-ui/core'

export default function HeaderSearch({
  width,
  open,
  handleSearch,
  handleClear
}) {
  const classes = styles()
  const [search, setSearch] = useState('')

  return (
    <>
      <Paper
        className={`${classes.searchPaper} ${open && classes.show}`}
        style={{
          width: width
        }}
      >
        <TextField
          inputProps={{
            style: {
              padding: '6px'
            }
          }}
          variant="outlined"
          size="small"
          placeholder="Search"
          fullWidth
          type="search"
          value={search}
          onChange={event => {
            setSearch(event.target.value)
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
            onClick={() => handleSearch(search)}
          >
            Search
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.clearButton}
            onClick={() => {
              setSearch('')
              handleClear()
            }}
          >
            Clear
          </Button>
        </div>
      </Paper>
    </>
  )
}
