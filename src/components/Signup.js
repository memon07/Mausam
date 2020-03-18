import React from 'react'
import ConnectedSignup from '../form/SignupForm'
import '../css/Signup.css';

function Signup () {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="offset-md-4 col-md-4 col-12 signup-box">
            <ConnectedSignup/>
          </div>
        </div>
      </div>                       
    </>
  )
}

export default Signup
