import React, { useRef, useEffect, forwardRef } from 'react'
import { FixedSizeList } from 'react-window'
import Header from './Header'
import Row from './Row'

import { useDispatch } from 'react-redux'
import { changeRowOffset } from '../../redux/action/table'

const innerElementType = forwardRef(({ children, ...rest }, ref) => (
  <div ref={ref} {...rest}>
    <Header />
    {children}
  </div>
))

export default function List({ data }) {
  const dispatch = useDispatch()
  const containerRef = useRef()

  useEffect(() => {
    function handleScroll(evt) {
      dispatch(changeRowOffset(this.scrollLeft))
    }

    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll)
    }

    return function cleanup() {
      // containerRef.current.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <>
      <FixedSizeList
        outerRef={containerRef}
        height={828}
        itemSize={56}
        innerElementType={innerElementType}
        itemCount={data.length}
        width={1287}
        itemData={{ ...data }}
      >
        {data => {
          return <Row {...data} />
        }}
      </FixedSizeList>
    </>
  )
}
