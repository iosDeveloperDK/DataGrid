import React from 'react'
import styles from '../style'
import { useDispatch, useSelector } from 'react-redux'
import {
  changeSortType,
  changeMultipleSortType
} from '../../../redux/action/sort'
import _ from 'lodash'
import HeaderTitle from './header-title/HeaderTitle'
import HeaderSearchIcon from './header-search/HeaderSearchIcon'
import ResizableColumn from './resizable-column/ResizableColumn'

export default function Header({ style }) {
  const classes = styles()
  const dispatch = useDispatch()
  const { sort } = useSelector(state => state.sort)
  const { columns } = useSelector(state => state.settings)

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
                  data-column={true}
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
                  {data.minWidth && (
                    <ResizableColumn
                      id={data.id}
                      columns={columns}
                      minWidth={data.minWidth}
                    />
                  )}
                  {data.search && <HeaderSearchIcon {...data} />}
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
}
