import React from 'react'
import styles from './style'
import { Typography, Avatar, Checkbox } from '@material-ui/core'
import { useSelector } from 'react-redux'

export default React.memo(
  ({ correctIndex, style, data, handleClick, handleShiftClick, selected }) => {
    const { columns } = useSelector(state => state.settings)
    const classes = styles()
    const user = data[correctIndex]
    console.log('render')

    return (
      user && (
        <div
          style={style}
          className={`${classes.row} ${selected && classes.rowSelected}`}
          onClick={event => {
            if (event.shiftKey) {
              handleShiftClick(correctIndex)
            } else {
              handleClick(correctIndex)
            }
          }}
        >
          {columns
            .filter(column => column.display)
            .map((column, index) => {
              switch (column.title) {
                case 'CHECKBOX':
                  return (
                    <div
                      key={index}
                      className={`${classes.rowValue} checkbox`}
                      style={{ width: column.width }}
                    >
                      <Checkbox className={classes.icon} checked={selected} />
                    </div>
                  )
                case 'AVATAR':
                  return (
                    <div
                      key={index}
                      className={`${classes.rowValue} avatar`}
                      style={{ width: column.width }}
                    >
                      <Avatar className={classes.rowAvatar} src={user.avatar} />
                    </div>
                  )
                case 'NAME':
                  return (
                    <div
                      key={index}
                      className={`${classes.rowValue} name`}
                      style={{
                        position: 'sticky',
                        left: '0px',
                        // left: `${offsetLeft}px`,
                        width: column.width
                      }}
                    >
                      <Typography>{user.name}</Typography>
                    </div>
                  )
                case 'CAR':
                  return (
                    <div
                      key={index}
                      className={`${classes.rowValue} car`}
                      style={{ width: column.width }}
                    >
                      <Typography>{user.car}</Typography>
                    </div>
                  )
                case 'TYPE':
                  return (
                    <div
                      key={index}
                      className={`${classes.rowValue} type`}
                      style={{ width: column.width }}
                    >
                      <Typography>{user.type}</Typography>
                    </div>
                  )
                case 'PRICE':
                  return (
                    <div
                      key={index}
                      className={`${classes.rowValue} price ${user.price < 0 &&
                        'minus'}`}
                      style={{ width: column.width }}
                    >
                      <Typography>$ {user.price}</Typography>
                    </div>
                  )
                case 'ONLINE':
                  return (
                    <div
                      key={index}
                      className={`${classes.rowValue} online`}
                      style={{ width: column.width }}
                    >
                      <span
                        className={user.isOnline ? 'online' : 'offline'}
                      ></span>
                    </div>
                  )
                case 'DATE':
                  return (
                    <div
                      key={index}
                      className={`${classes.rowValue} date`}
                      style={{ width: column.width }}
                    >
                      <Typography>{user.date.toLocaleString()}</Typography>
                    </div>
                  )
                case 'TEXT':
                  return (
                    <div
                      key={index}
                      className={`${classes.rowValue} text`}
                      style={{ width: column.width }}
                    >
                      <Typography style={{ flexShrink: 10 }}>
                        {user.text}
                      </Typography>
                    </div>
                  )
                default:
                  break
              }
            })}
        </div>
      )
    )
  }
)
