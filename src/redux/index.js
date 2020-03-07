import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import createRootReducer from './reducer'
import thunk from 'redux-thunk'

const store = createStore(
  createRootReducer(),
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
