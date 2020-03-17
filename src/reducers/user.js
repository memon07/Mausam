import Immutable from 'immutable';
import * as ActionType from '../actionTypes/user';

export const initialState = Immutable.fromJS(null)

export default function (state = initialState,action) {
    switch(action.type) {
        case ActionType.USER_FETCH_DATA:
            return {...state, payload: action.payload}
        
        default:
            return state
    }
}