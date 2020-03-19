import React , { Component } from 'react'
import { connect } from 'react-redux'

import ReactAutocomplete from 'react-autocomplete'
import { Button } from 'antd'
import axios from 'axios'

import cities from './city.json'
import '../css/Weather.css'

import humidity from '../images/humidity.svg'
import wind from '../images/wind.svg'

import { postWeather } from '../actions/weather'

class Weather extends Component {

    constructor (props) {
      super(props)
      this.state = {
        value: '',
        weather: '',
        weatherArray: []
      }
    }

    searchWeather = () => {
        console.log(this.state.value)
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=589eede1cda9e557e2aa4273d1b5b36f`, { 
        }).then((response) => {
            console.log(response.data)
            this.setState(
              {weather : response.data}
              )
              this.setState({
                weatherArray: [...this.state.weatherArray, response.data]
              })
              const { saveWeather } = this.props;
              saveWeather(this.state.weatherArray);

              console.log('...',this.state.weather)
        }).catch((error)=> {
            console.log(error)
        })
    }
  
    render() {
      return (
          <>
          <div className="row">
            <div className="col-12 pb-5">
              <ReactAutocomplete
              className="ant-input"
                  items={[
                      ...cities
                  ]}
                  shouldItemRender={(item, value) => item.city.toLowerCase().indexOf(value.toLowerCase()) > -1}
                  getItemValue={item => item.city}
                  renderItem={(item, highlighted) =>
                  <div
                      key={item.id}
                      style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                  >
                      {item.city}
                  </div>
                  }
                  value={this.state.value}
                  onChange={e => this.setState({ value: e.target.value })}
                  onSelect={value => this.setState({ value })}
              />
              <Button onClick={this.searchWeather} size="large" className="ml-2" >Search</Button>
            </div>
            {this.state.weather ?
            <div className="col-12">
              <span className="temprature-div">
                {Math.trunc(this.state.weather.main.temp - 273.15)} ° C
              </span>
              <img src={`https://openweathermap.org/img/w/${this.state.weather.weather[0].icon}.png`} alt="logo"/>
              <h4>
                {this.state.weather ?this.state.weather.weather[0].description : ''}
              </h4>

              <h5 className="cord-div">Co-oridinates  [ lon : {this.state.weather.coord.lon} , lat : {this.state.weather.coord.lon} ]</h5>
              <h5 className="img-div">
                <img src={humidity} height="30" className="pt-2 mr-2" alt="humidity"/> {this.state.weather.main.humidity}
              </h5>
              <h5 className="img-div">
                <img src={wind} height="30" className="pt-2 mr-2" alt="wind"/> {this.state.weather.wind.speed}
              </h5>
            </div>
            :''}
          </div>
          </>
      )
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      saveWeather: (data) => dispatch(postWeather(data))
    }
  }

  export default connect(null, mapDispatchToProps)(Weather)