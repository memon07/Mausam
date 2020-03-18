import axios from 'axios'
import * as actionTypes from '../actionTypes/user'

export function getUserData(url,data) {
    return (dispatch) => {
        axios.post(url,data)
        .then(function (response) {
          if(response.data && response.status === 201 ){
            console.log('data in action',response.data)
            let dispatchData = {
                'id' : response.data.data.id,
                'name' :response.data.data.name,
            }
            dispatch(actionTypes.fetchUserData(dispatchData))
          }
        })
        .catch(function (error) {
          return Promise.reject(error);
        });
    }
}

export function postRegister(url,data) {
  return (dispatch) => {
      axios.post(url,data)
      .then(function (response) {
        if(response.data && response.status === 201 ){
          console.log('data in action',response.data)
          let dispatchData = {
              'id' : response.data.data.id,
              'name' :response.data.data.name,
          }
          dispatch(actionTypes.fetchUserData(dispatchData))
        }
      })
      .catch(function (error) {
        return Promise.reject(error);
      });
  }
}
