import React, { useRef, useEffect, forwardRef } from 'react'
import { FixedSizeList } from 'react-window'
import styles from './style'
import { Box, Typography, Avatar, Checkbox } from '@material-ui/core'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import Header from './Header'
import Row from './Row'

import { useDispatch, useSelector } from 'react-redux'
import { changeRowOffset } from '../../redux/action/table'
import { cahngeSortType } from '../../redux/action/sort'
import { doAscending } from '../../utils/utils'
import { globalFilterChange } from '../../redux/action/filter'

// const Header = ({ index, style }) => {
//   const dispatch = useDispatch()
//   const classes = styles()
//   const { sort, asc } = useSelector(state => state.sort)

//   const renderSorting = type => {
//     const ascending = doAscending(type, sort, asc)

//     if (ascending != null) {
//       return ascending ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />
//     }
//   }

//   return (
//     <Box style={{ width: '1500px', height: 35 }} className={`${classes.row} `}>
//       <Box width="5%">
//         <Checkbox />
//       </Box>
//       <Box width="5%">
//         <Typography>Аватарка</Typography>
//       </Box>
//       <Box
//         width="10%"
//         display="flex"
//         alignItems="center"
//         onClick={() => {
//           dispatch(cahngeSortType('login', true))
//         }}
//       >
//         <Typography>Логин</Typography>
//         {renderSorting('login')}
//       </Box>
//       <Box
//         width="15%"
//         display="flex"
//         alignItems="center"
//         onClick={() => {
//           dispatch(cahngeSortType('type', doAscending('type', sort, asc)))
//         }}
//       >
//         <Typography>Тип</Typography>
//         {renderSorting('type')}
//       </Box>
//       <Box
//         width="5%"
//         display="flex"
//         alignItems="center"
//         onClick={() => {
//           dispatch(
//             cahngeSortType('site_admin', doAscending('site_admin', sort, asc))
//           )
//         }}
//       >
//         <Typography>Админ</Typography>
//         {renderSorting('site_admin')}
//       </Box>
//       <Box width="5%">
//         <Typography>Ссылка</Typography>
//       </Box>
//       <Box width="5%">
//         <Typography>1</Typography>
//       </Box>
//     </Box>
//   )
// }

const innerElementType = forwardRef(({ children, ...rest }, ref) => (
  <div ref={ref} {...rest}>
    <Header />
    {children}
  </div>
))

export default function List({ data }) {
  const dispatch = useDispatch()
  const containerRef = useRef()

  // const [offset, setOffset] = React.useState(0)
  useEffect(() => {
    function handleScroll(evt) {
      // if (this.scrollLeft > 130) {
      // if (condition) {

      // }
      dispatch(changeRowOffset(this.scrollLeft))
      // } else if (this.scrollLeft <= 130) {
      //   // dispatch(changeRowOffset(this.scrollLeft))
      // }
      console.log('scroll-----', this.scrollLeft)

      //   setOffset(this.scrollLeft)
      //   console.log(this.scrollLeft)
    }

    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll)
    }

    return function cleanup() {
      // containerRef.current.removeEventListener('scroll', handleScroll)
    }
  })
  // const onScroll = React.useCallback(
  //   ({ scrollTop, scrollUpdateWasRequested }) => {
  //     if (!scrollUpdateWasRequested) {
  //       // console.log(scrollTop)
  //     }
  //   }
  // )

  return (
    data.length && (
      <>
        <FixedSizeList
          outerRef={containerRef}
          onScroll={scroll => {
            // dispatch(changeRowOffset(scroll))
          }}
          height={550}
          itemSize={56}
          innerElementType={innerElementType}
          itemCount={data.length}
          width={1200}
          itemData={{ ...data }}
        >
          {data => {
            {
              /* if (data.index === 0) return null */
            }
            return <Row {...data} />
          }}
        </FixedSizeList>
      </>
    )
  )
}
