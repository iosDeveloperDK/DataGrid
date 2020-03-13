import React, { useEffect, useRef } from 'react'
import styles from './style'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { settingsColumnsChange } from '../../../../redux/action/settings'

export default function ResizableColumn({ minWidth, columns, id }) {
  const classes = styles()
  const columnRef = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(columnRef)
    if (columnRef.current) {
      setListeners(columnRef.current)
    }
  }, [])

  function setListeners(div) {
    var pageX, curCol, curColWidth

    div.addEventListener('mousedown', function(e) {
      curCol = e.target.parentElement
      pageX = e.pageX

      var padding = paddingDiff(curCol)

      curColWidth = curCol.offsetWidth - padding
    })

    document.addEventListener('mousemove', function(e) {
      if (curCol) {
        var diffX = e.pageX - pageX
        curCol.style.width = curColWidth + diffX + 'px'
      }
    })

    document.addEventListener('mouseup', function(e) {
      if (curCol) {
        var newColumns = _.map(columns, column => {
          return column.id === id
            ? {
                ...column,
                width: `${Math.max(
                  Number(curCol.style.width.replace(/[^\d\.\-]/g, '')),
                  minWidth
                )}px`
              }
            : column
        })
        dispatch(settingsColumnsChange(newColumns))
      }
      curCol = undefined
      pageX = undefined
      curColWidth = undefined
    })
  }

  function paddingDiff(col) {
    if (getStyleVal(col, 'box-sizing') === 'border-box') {
      return 0
    }

    var padLeft = getStyleVal(col, 'padding-left')
    var padRight = getStyleVal(col, 'padding-right')
    return parseInt(padLeft) + parseInt(padRight)
  }

  function getStyleVal(elm, css) {
    return window.getComputedStyle(elm, null).getPropertyValue(css)
  }

  return (
    <div data-column={true} ref={columnRef} className={classes.separator}></div>
  )
}
