import { combineReducers } from 'redux'
import articles from './articles'
import detail from './detail'

const rootReducer = combineReducers({
  articles,
  detail
})

export default rootReducer
