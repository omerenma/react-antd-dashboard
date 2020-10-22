import {FIRSTACTIONTYPE} from '../actions/firstAction'

const initialState = {};

export const firstReducer = (state=initialState, action) => {
    switch(action.type){
        case FIRSTACTIONTYPE:
            return {
                ...state,
                payload:action.payload
            }
            default:
                return state
    }
}
