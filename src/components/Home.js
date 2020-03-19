import React , { useEffect } from 'react'
import { connect } from 'react-redux'
import {Button } from 'antd'

import history from '../history'

function Home(props) {

    useEffect(() => {
        // console.log(user.user)
        console.log(props.user ?props.user.payload : '')
        // setUser(user.user)
    }, [])

    if(props.user === null || props.user === 'undefined'){
        // console.log(user.payload)
        return <>
            <div className="container">
                <div className="row">
                    <div className="col-12 pt-4 text-center">
                        <h3 className="text-center">Please login to access our module</h3>
                        <Button onClick={() => {history.push("/login")}}>
                            Login in</Button>
                    </div>
                </div>
            </div>
        </>
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3>Welcome ,</h3>
                    <h5>
                        {props.user?props.user.payload.email : ''}
                    </h5>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.user)
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(Home)