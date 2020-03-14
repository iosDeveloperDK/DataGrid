import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { FixedSizeList } from 'react-window'
import Row from './row/Row'
import { useDispatch, useSelector } from 'react-redux'
import TableSnackbar from '../snackbar/TableSnackbar'
import { deleteUsers, selectAllUsers } from '../../redux/action/users'
import AutoSizer from 'react-virtualized-auto-sizer'
import CustomTable from './body/CustomTable'
import TableWrapper from './body/TableWrapper'
import ScrollableBody from './body/ScrollableBody'

export default React.memo(function List({ data }) {
  const dispatch = useDispatch()
  const { virtualization } = useSelector(state => state.settings)
  const [selectedRow, setSelectRow] = useState([])
  const [selectedRowIndex, setSelectRowIndex] = useState([])
  const { selectedRows } = useSelector(state => state.data)

  useEffect(() => {
    if (selectedRows === 1) {
      setSelectRow(data.map(user => user.id))
      setSelectRowIndex(_.range(data.length))
    } else if (selectedRows === 2) {
      setSelectRow([])
      setSelectRowIndex([])
      dispatch(selectAllUsers(0))
    }
  }, [selectedRows, data, dispatch])

  const deleteSlectedUsers = () => {
    setSelectRow([])
    setSelectRowIndex([])
    dispatch(deleteUsers(selectedRow))
  }

  const hadndleSelecteRow = (correctIndex, index) => {
    const userId = data[correctIndex].id
    if (selectedRow.includes(userId)) {
      _.pull(selectedRow, userId)
      setSelectRow([...selectedRow])
      setSelectRowIndex([...selectedRowIndex])
    } else {
      setSelectRow([...selectedRow, userId])
      setSelectRowIndex([...selectedRowIndex, index])
    }
  }

  const handleMultiSelecteRow = (correctIndex, index) => {
    const userId = data[correctIndex].id

    if (selectedRow.includes(userId)) {
      _.pull(selectedRow, userId)
      setSelectRow([...selectedRow])
      _.pull(selectedRowIndex, index)
      setSelectRowIndex([...selectedRowIndex])
    } else {
      let maxIndexValue = 0
      let minIndexValue = index

      let insertIndexArray = []
      selectedRowIndex.sort().forEach(value => {
        if (index < value) {
          maxIndexValue = value
          return
        } else {
          minIndexValue = value
          maxIndexValue = index
        }
      })
      for (let i = minIndexValue; i <= maxIndexValue; i++) {
        insertIndexArray.push(i)
      }

      let maxValue = 0
      let minValue = index

      let insertArray = []
      selectedRowIndex.sort().forEach(value => {
        if (index < value) {
          maxValue = value
          return
        } else {
          minValue = value
          maxValue = index
        }
      })

      for (let i = minValue; i <= maxValue; i++) {
        const userId = data[i].id
        insertArray.push(userId)
      }

      if (selectedRow.length > 0) {
        setSelectRow(_.union(selectedRow, insertArray))
        setSelectRowIndex(_.union(selectedRowIndex, insertIndexArray))
      } else {
        setSelectRow([...selectedRow, userId])
        setSelectRowIndex([...selectedRowIndex, index])
      }
    }
  }

  const renderRow = (key, style, data, correctIndex) => {
    return (
      <Row
        key={key}
        data={data}
        style={style}
        correctIndex={correctIndex}
        selectedRow={selectedRow}
        handleClick={index => {
          hadndleSelecteRow(correctIndex, index)
        }}
        handleShiftClick={index => {
          handleMultiSelecteRow(correctIndex, index)
        }}
      />
    )
  }

  const renderLibVirtualTable = (height, width) => {
    return (
      <ScrollableBody path="outerRef" key={0}>
        <FixedSizeList
          height={height}
          itemSize={56}
          overscanCount={30}
          innerElementType={test => {
            return <TableWrapper children={test.children} style={test.style} />
          }}
          itemCount={data.length + 1}
          width={width}
          itemData={{ ...data }}
        >
          {data => {
            if (data.index === 0) {
              return null
            } else {
              const correctIndex = data.index - 1
              return renderRow(data.index, data.style, data.data, correctIndex)
            }
          }}
        </FixedSizeList>
      </ScrollableBody>
    )
  }

  const renderCustomVirtualTable = (height, width) => {
    return (
      data.length && (
        <ScrollableBody path="ref" key={1}>
          <div style={{ width: width, height: height }}>
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
                return renderRow(value.index, value.style, data, value.index)
              }}
            </CustomTable>
          </div>
        </ScrollableBody>
      )
    )
  }

  const renderSimpleTable = (height, width) => {
    return (
      <ScrollableBody path="ref" key={2}>
        <div
          style={{
            height: `${height}px`,
            width: `${width}px`,
            overflowY: 'scroll'
          }}
        >
          <TableWrapper>
            {data.map((user, index) =>
              renderRow(
                user.id,
                { height: '56px', position: 'static !important' },
                data,
                index
              )
            )}
          </TableWrapper>
        </div>
      </ScrollableBody>
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
