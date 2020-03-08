import React, { useRef, useEffect, forwardRef, useState } from 'react'
import { FixedSizeList } from 'react-window'
import Header from './Header'
import Row from './row/Row'
import { useDispatch, useSelector } from 'react-redux'
import { changeRowOffset } from '../../redux/action/table'
import _ from 'lodash'
import TableSnackbar from '../snackbar/TableSnackbar'
import { deleteUsers } from '../../redux/action/users'
import { TransitionGroup } from 'react-transition-group'

const InnerElementType = ({ children, ...rest }) => (
  <div {...rest}>
    <Header />
    {children}
  </div>
)

export default function List({ data }) {
  const dispatch = useDispatch()
  const containerRef = useRef()
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

  // useEffect(() => {
  //   function handleScroll(evt) {
  //     dispatch(changeRowOffset(this.scrollLeft))
  //   }

  //   if (containerRef.current) {
  //     containerRef.current.addEventListener('scroll', handleScroll)
  //   }

  //   return function cleanup() {
  //     // containerRef.current.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])
  console.log('render list')

  return (
    <>
      {virtualization ? (
        <FixedSizeList
          // outerRef={containerRef}
          height={828}
          itemSize={56}
          innerElementType={InnerElementType}
          itemCount={data.length + 1}
          width={1287}
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
      ) : (
        <div style={{ height: '828px', overflowY: 'scroll' }}>
          <InnerElementType>
            {data.map((user, index) => (
              <Row key={index} index={index} style={{}} data={data} />
            ))}
          </InnerElementType>
        </div>
      )}
      <TableSnackbar
        display={selectedRow.length > 0}
        handleDelete={() => {
          setSelectRow([])
          dispatch(deleteUsers(selectedRow))
        }}
      />
    </>
  )
}
