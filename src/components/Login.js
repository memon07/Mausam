import React from 'react'
import ConnectedLogin from '../form/LoginForm'

function Login () {
  return (
    <>
        <div className="container">
        <div className="row">
          <div className="offset-md-4 col-md-4 col-12 signup-box">
            <ConnectedLogin/>
          </div>
        </div>
      </div> 
    </>
  )
}



export default Login;