import {combineReducers} from 'redux'
import {firstReducer} from '../reducers/firstReducer'

export const combineReducer = combineReducers({
firstReducer:firstReducer
})