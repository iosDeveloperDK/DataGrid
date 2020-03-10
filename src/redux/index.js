import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import logger from 'redux-logger'
import createRootReducer from './reducer'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import query from './middleware/QueryMiddleware'

const history = createBrowserHistory()
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), query(history), thunk)
  )
)

export default store
