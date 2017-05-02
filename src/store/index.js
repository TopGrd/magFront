import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducer'
import logger from '../utils/middleware'

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(
    logger
  )
))

export default store
