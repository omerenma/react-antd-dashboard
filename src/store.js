import {createStore, applyMiddleware,} from 'redux'
import {combineReducer} from './containers/reducers/rootReducers'
export const store = createStore(combineReducer)
