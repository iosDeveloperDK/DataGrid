import React, { useEffect, useState } from 'react'
import { FixedSizeList } from 'react-window'
import Row from './row/Row'
import { useDispatch, useSelector } from 'react-redux'
import { changeRowOffset } from '../../redux/action/table'
import _ from 'lodash'
import TableSnackbar from '../snackbar/TableSnackbar'
import { deleteUsers, selectAllUsers } from '../../redux/action/users'
import AutoSizer from 'react-virtualized-auto-sizer'
import CustomTable from './body/CustomTable'
import TableWrapper from './body/TableWrapper'

export default React.memo(function List({ data }) {
  const dispatch = useDispatch()
  const { virtualization } = useSelector(state => state.settings)
  const [selectedRow, setSelectRow] = useState([])
  const { selectedRows } = useSelector(state => state.data)

  useEffect(() => {
    if (selectedRows === 1) {
      setSelectRow(_.range(data.length))
    } else if (selectedRows === 2) {
      setSelectRow([])
      dispatch(selectAllUsers(0))
    }
  }, [selectedRows, data, dispatch])

  const deleteSlectedUsers = () => {
    setSelectRow([])
    dispatch(
      deleteUsers(
        data
          .filter((user, index) => selectedRow.includes(index))
          .map(user => user.id)
      )
    )
  }

  const hadndleSelecteRow = (correctIndex, index) => {
    if (selectedRow.includes(correctIndex)) {
      _.pull(selectedRow, index)
      setSelectRow([...selectedRow])
    } else {
      setSelectRow([...selectedRow, index])
    }
  }

  const handleMultiSelecteRow = (correctIndex, index) => {
    if (selectedRow.includes(correctIndex)) {
      _.pull(selectedRow, index)
      setSelectRow([...selectedRow])
    } else {
      let maxValue = 0
      let minValue = index

      let insertArray = []
      selectedRow.sort().forEach(value => {
        if (index < value) {
          maxValue = value
          return
        } else {
          minValue = value
          maxValue = index
        }
      })
      for (let i = minValue; i <= maxValue; i++) {
        insertArray.push(i)
      }

      if (selectedRow.length > 0) {
        setSelectRow(_.union(selectedRow, insertArray))
      } else {
        setSelectRow([...selectedRow, index])
      }
    }
  }

  const renderLibVirtualTable = (height, width) => {
    return (
      <FixedSizeList
        onScroll={scroll => {
          dispatch(changeRowOffset(scroll.scrollOffset))
        }}
        height={height}
        itemSize={56}
        overscanCount={30}
        innerElementType={TableWrapper}
        itemCount={data.length + 1}
        width={width}
        itemData={{ ...data }}
      >
        {data => {
          if (data.index === 0) {
            return null
          } else {
            const correctIndex = data.index - 1
            return (
              <Row
                {...data}
                correctIndex={correctIndex}
                selected={selectedRow.includes(correctIndex)}
                handleClick={index => {
                  hadndleSelecteRow(correctIndex, index)
                }}
                handleShiftClick={index => {
                  handleMultiSelecteRow(correctIndex, index)
                }}
              />
            )
          }
        }}
      </FixedSizeList>
    )
  }

  const renderCustomVirtualTable = (height, width) => {
    return (
      data.length && (
        <CustomTable
          itemCount={data.length}
          rowHeight={56}
          overscanCount={12}
          height={height}
          width={width}
          offsetTop={56}
          innerElementType={TableWrapper}
        >
          {value => {
            return (
              <Row
                key={value.index}
                data={data}
                correctIndex={value.index}
                style={value.style}
                selected={selectedRow.includes(value.index)}
                handleClick={index => {
                  hadndleSelecteRow(value.index, index)
                }}
                handleShiftClick={index => {
                  handleMultiSelecteRow(value.index, index)
                }}
              />
            )
          }}
        </CustomTable>
      )
    )
  }

  const renderSimpleTable = (height, width) => {
    return (
      <div
        style={{
          height: `${height}px`,
          width: `${width}px`,
          overflowY: 'scroll'
        }}
      >
        <TableWrapper>
          {data.map((user, index) => (
            <Row
              key={user.id}
              correctIndex={index}
              data={data}
              style={{ height: '56px' }}
              selected={selectedRow.includes(index)}
              handleClick={rowIndex => {
                hadndleSelecteRow(index, rowIndex)
              }}
              handleShiftClick={rowIndex => {
                handleMultiSelecteRow(index, rowIndex)
              }}
            />
          ))}
        </TableWrapper>
      </div>
    )
  }

  return (
    <>
      <AutoSizer>
        {({ height, width }) =>
          (() => {
            switch (virtualization) {
              case 0:
                return renderLibVirtualTable(height, width)
              case 1:
                return renderCustomVirtualTable(height, width)
              default:
                return renderSimpleTable(height, width)
            }
          })()
        }
      </AutoSizer>
      <TableSnackbar
        display={selectedRow.length > 0}
        handleDelete={() => {
          deleteSlectedUsers()
        }}
      />
    </>
  )
})
