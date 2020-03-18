import axios from 'axios'
import * as actionTypes from '../actionTypes/user'

import { myFirebase } from "../firebase"
import history from "../history"
import { success ,error} from '../components/message'

export function getUserData(data) {
    return (dispatch) => {
        myFirebase
          .auth()
          .signInWithEmailAndPassword(data.email, data.password)
          .then(user => {
            console.log(user.user.uid)
            let dispatchData = {
              uid: user.user.uid,
              displayName: user.user.displayName,
              photoURL: user.user.photoURL,
              email: user.user.email,
              emailVerified: user.user.emailVerified,
              phoneNumber: user.user.phoneNumber,
              isAnonymous: user.user.isAnonymous,
              isAuth:true
            }
            console.log('action data XX', dispatchData)

            // axios.get(url,{params: {
            //   uid: user.user.uid
            //   }})
            // .then(function (response) {
            //   if(response.data && response.status === 200 ){
            //     console.log('data in get ',response)
            //     let dispatchData = {
            //         'email' : response.data.email,
            //         'password' :response.data.password,
            //     }
            //     // dispatch(actionTypes.fetchUserData(dispatchData))
            //   }
            // })
            // .catch(function (error) {
            //   return Promise.reject(error);
            // });

            dispatch(actionTypes.fetchUserData(dispatchData));
            history.push('/dashboard');
          })
          .catch(error => {
            // error(error)
            console.log(error)
          });
    }
}

export function postRegister(url,data) {
  return (dispatch) => {
      axios.post(url,data)
      .then(function (response) {
        console.log('insode user data action',response)
        if(response.data && response.status === 200 ){
          let dispatchData = {
              'username' : response.data.username,
              'email' : response.data.email,
              isAuth:true
          }
          myFirebase.auth().createUserWithEmailAndPassword(data.email, data.password)
          .then(function(user){
            if(user.user.uid){
              dispatch(actionTypes.postRegister(dispatchData))
              success('Profile has been created !!')
            }
          })
          .catch(function(error) {
            console.log(error);
          });
        }
      })
      .catch(function (error) {
        return Promise.reject(error);
      });
  }
}
