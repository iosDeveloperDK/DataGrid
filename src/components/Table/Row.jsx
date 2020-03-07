import React, { useRef, useEffect } from 'react'
import { FixedSizeList } from 'react-window'
import styles from './style'
import { Box, Typography, Avatar, Checkbox } from '@material-ui/core'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'

export default ({ index, style, data, offset }) => {
  let offsetLeft = useSelector(state => state.table.offsetLeft)
  // console.log(offset)
  offsetLeft = offsetLeft > 144 ? offsetLeft - 144 : 0
  const classes = styles()
  const user = data[index]

  return (
    user && (
      <div style={style} className={classes.row}>
        <div className={`${classes.rowValue} checkbox`}>
          <Checkbox className={classes.icon} />
        </div>
        <div className={`${classes.rowValue} avatar`}>
          <Avatar className={classes.rowAvatar} src={user.avatar} />
        </div>
        <div
          className={`${classes.rowValue} name`}
          style={{ position: 'relative', left: `${offsetLeft}px` }}
        >
          <Typography>{user.name}</Typography>
        </div>
        <div className={`${classes.rowValue} car`}>
          <Typography>{user.car}</Typography>
        </div>
        <div className={`${classes.rowValue} type`}>
          <Typography>{user.type}</Typography>
        </div>
        <div
          className={`${classes.rowValue} price ${user.price < 0 && 'minus'}`}
        >
          <Typography>$ {user.price}</Typography>
        </div>
        <div className={`${classes.rowValue} online`}>
          <span className={user.isOnline ? 'online' : 'offline'}></span>
        </div>
        <div className={`${classes.rowValue} date`}>
          <Typography>{user.date.toLocaleString()}</Typography>
        </div>
        <div className={`${classes.rowValue} text`}>
          <Typography style={{ flexShrink: 10 }}>{user.lorem}</Typography>
        </div>
      </div>
    )
  )
}
