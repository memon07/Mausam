import React from 'react'
import { connect } from 'react-redux'
import {Button } from 'antd'

import history from '../history'
import '../css/History.css'
import humidity from '../images/humidity.svg'
import wind from '../images/wind.svg'


function History(props) {


    if(props.user === null || props.user === 'undefined'){
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
                    <h2 className="pb-4">Search History</h2>
                    {
                        props.weather ? 
                        props.weather.payload.map(item => (
                            <div className="history-sections">
                                <span className="temprature-div">
                                    {Math.trunc(item.main.temp - 273.15)} ° C
                                </span>
                                <img src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="logo"/>
                                <h4>
                                    {item ?item.weather[0].description : ''}
                                </h4>

                                <h5 className="cord-div">Co-oridinates  [ lon : {item.coord.lon} , lat : {item.coord.lon} ]</h5>
                                <h5 className="img-div">
                                    <img src={humidity} height="30" className="pt-2 mr-2" alt="humidity"/> {item.main.humidity}
                                </h5>
                                <h5 className="img-div">
                                    <img src={wind} height="30" className="pt-2 mr-2" alt="wind"/> {item.wind.speed}
                                </h5>
                            </div>
                        ))
                        :''
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.user ,state.weather)
    return {
        user : state.user,
        weather : state.weather
    }
}

export default connect(mapStateToProps)(History)
