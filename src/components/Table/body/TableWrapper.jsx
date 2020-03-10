import React from 'react'
import Header from '../header/Header'

export default function TableWrapper({ children, ...rest }) {
  return (
    <div {...rest}>
      <Header />
      {children}
    </div>
  )
}
