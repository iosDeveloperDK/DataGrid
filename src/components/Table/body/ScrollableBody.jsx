import React, { useRef, useEffect } from 'react'

export default function ScrollableBody({ children, path }) {
  const tableRef = useRef()

  useEffect(() => {
    if (tableRef.current) {
      const slider = tableRef.current
      let isDown = false
      let startX
      let scrollLeft
      slider.addEventListener('mousedown', e => {
        if (e.target.dataset.column) return
        isDown = true
        startX = e.pageX - slider.offsetLeft
        scrollLeft = slider.scrollLeft
      })
      slider.addEventListener('mouseleave', () => {
        isDown = false
        slider.classList.remove('active')
      })
      slider.addEventListener('mouseup', () => {
        isDown = false
        slider.classList.remove('active')
      })
      slider.addEventListener('mousemove', e => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - slider.offsetLeft
        const walk = x - startX
        slider.scrollLeft = scrollLeft - walk
      })
    }
  }, [])

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { [path]: tableRef })
  )

  return childrenWithProps
}
