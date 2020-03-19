import React , { useState ,useEffect } from 'react'
import { connect } from 'react-redux'
import {Button } from 'antd'

import Weather from './Weather'

import history from '../history'
import '../css/Home.css'

function Home(props) {

    const [value, setValue] = useState('');

    // if(props.user === null || props.user === 'undefined'){
    //     return <>
    //         <div className="container">
    //             <div className="row">
    //                 <div className="col-12 pt-4 text-center">
    //                     <h3 className="text-center">Please login to access our module</h3>
    //                     <Button onClick={() => {history.push("/login")}}>
    //                         Login in</Button>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="mb-1 mt-3">Welcome ,</h3>
                    <h5 className="home-username">
                        {props.user?props.user.payload.email.split('@')[0] : ''}
                    </h5>
                </div>

                <div className="col-12">
                    <div className="search-text pb-2">
                        <h5>
                            Search your favourite city's weather 
                        </h5>
                    </div>
                    <Weather/>
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