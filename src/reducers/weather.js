import Immutable from 'immutable';
import * as ActionType from '../actionTypes/weather';

export const initialState = Immutable.fromJS(null)

export default function (state = initialState,action) {
    switch(action.type) {
        case ActionType.SAVE_WEATHER_HISTORY:
            return {...state, payload: action.payload}
        
        default:
            return state
    }
}