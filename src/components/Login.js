import React from 'react'
import ConnectedLogin from '../form/LoginForm'
import '../css/Login.css'

function Login () {
  return (
    <>
        <div className="row ">
          <div className="col-lg-4 col-12">
            <div className="container login-box">

            <ConnectedLogin/>
            </div>
          </div>
          <div className="col-lg-8 d-none d-lg-block login-bg">
          </div>
        </div>
    </>
  )
}



export default Login;