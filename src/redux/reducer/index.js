import { combineReducers } from 'redux'
import Users from './users'
import Table from './table'
import Sort from './sort'
import Filter from './filter'
import Settings from './settings'

const createRootReducer = () =>
  combineReducers({
    data: Users,
    table: Table,
    sort: Sort,
    filter: Filter,
    settings: Settings
  })

export default createRootReducer
