import React, { forwardRef } from 'react'
import Header from '../header/Header'

export default forwardRef((props, ref) => (
  <div ref={ref} {...props}>
    <Header />
    {props.children}
  </div>
))
