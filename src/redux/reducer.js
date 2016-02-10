import { combineReducers } from 'redux'
import socket, { idReducer as id } from 'cape-redux-socket'
import { historyReducer as history } from 'redux-history-sync'
import { reducer as formReducer } from 'redux-form'

// import paginate from './reducers/paginate'
import db from './modules/db'
import entity from './modules/entity'
import errorMessage from './modules/errorMessage'
import filters from './modules/filters'

export defaultState from './defaultState'

export default combineReducers({
  db,
  entity,
  errorMessage,
  filters,
  form: formReducer,
  history,
  id,
  socket,
})
