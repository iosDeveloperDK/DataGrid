import React, { useEffect, useState } from 'react'
import { FixedSizeList } from 'react-window'
import Header from './Header'
import Row from './row/Row'
import { useDispatch, useSelector } from 'react-redux'
import { changeRowOffset } from '../../redux/action/table'
import _ from 'lodash'
import TableSnackbar from '../snackbar/TableSnackbar'
import { deleteUsers } from '../../redux/action/users'
import AutoSizer from 'react-virtualized-auto-sizer'
import CustomTable from './CustomTable'

const InnerElementType = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      <Header />
      {children}
    </div>
  )
}

export default function List({ data }) {
  const dispatch = useDispatch()
  const { virtualization } = useSelector(state => state.settings)
  const [selectedRow, setSelectRow] = useState([])
  const { selectedRows } = useSelector(state => state.data)

  useEffect(() => {
    if (selectedRows) {
      setSelectRow(_.range(data.length))
    } else {
      setSelectRow([])
    }
  }, [selectedRows])

  return (
    <>
      {virtualization ? (
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList
              onScroll={scroll => {
                dispatch(changeRowOffset(scroll.scrollOffset))
              }}
              height={height}
              itemSize={56}
              overscanCount={39}
              innerElementType={InnerElementType}
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
                        if (selectedRow.includes(correctIndex)) {
                          _.pull(selectedRow, index)
                          setSelectRow([...selectedRow])
                        } else {
                          setSelectRow([...selectedRow, index])
                        }
                      }}
                      handleShiftClick={index => {
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
                      }}
                    />
                  )
                }
              }}
            </FixedSizeList>
          )}
        </AutoSizer>
      ) : (
        <>
          {/* <div style={{ height: '828px', overflowY: 'scroll' }}>
          <InnerElementType>
            {data.map((user, index) => (
              <Row key={index} correctIndex={index} style={{}} data={data} />
            ))}
          </InnerElementType>
        </div> */}
          <AutoSizer>
            {({ height, width }) => {
              console.log(height, width)
              return (
                <CustomTable
                  itemCount={data.length}
                  rowHeight={56}
                  overscanCount={1}
                  height={height}
                  width={width}
                  innerElementType={InnerElementType}
                >
                  {value => {
                    return (
                      <Row
                        data={data}
                        correctIndex={value.index}
                        style={value.style}
                      />
                    )
                  }}
                </CustomTable>
              )
            }}
          </AutoSizer>
        </>
      )}
      <TableSnackbar
        display={selectedRow.length > 0}
        handleDelete={() => {
          setSelectRow([])
          dispatch(
            deleteUsers(
              data
                .filter((user, index) => selectedRow.includes(index))
                .map(user => user.id)
            )
          )
        }}
      />
    </>
  )
}
