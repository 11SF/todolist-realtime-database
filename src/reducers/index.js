import { combineReducers } from 'redux'
import counters from './todoReducer'
import sessions from './sessionsReducer'

export default combineReducers({
  counters,
  sessions
})