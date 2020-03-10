import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createRootReducer from './reducer'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import query from './middleware/QueryMiddleware'
import { saveState, loadState } from '../utils/localStorage'

const history = createBrowserHistory()
const store = createStore(
  createRootReducer(history),
  loadState(),
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), query(history), thunk)
  )
)

store.subscribe(() => {
  saveState({
    sort: store.getState().sort,
    filter: store.getState().filter,
    settings: store.getState().settings
  })
})

export default store
