import * as actionTypes from '../actionTypes/weather'
import { success ,errorMsg} from '../components/message'

export function postWeather(data) {
    return (dispatch) => {
        try{
            if(data){
                dispatch(actionTypes.saveWeather(data));
            }

        }catch(error) {
            console.log(error)
        };
    }
}
