import React from 'react';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY="e10a283dcd13bbff76b480bcdc5975da"

class App extends React.Component{
  constructor(){
    super()
    this.state={
      temperature:undefined,
      city:undefined,
      country:undefined,
      humidity:undefined,
      description:undefined,
      error:undefined
    }
  }

  getWeather=async(e)=>{
    e.preventDefault();
    const city=e.target.city.value;
    const country=e.target.country.value;
    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
    const data=await api_call.json();

    if (data.cod === '404') {
      this.setState({
        error: 'City not found'
      });
    } else if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        error: null,
      });
    } else {
      this.setState({
        error: 'Nothing to geocode'
      });
    }
}

render() {
  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather} />
                <Weather 
                  temperature={this.state.temperature} 
                  humidity={this.state.humidity}
                  city={this.state.city}
                  country={this.state.country}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
};

export default App

/* without css
  render(){
    return(
          <div>
              <Titles/>
              <Form getWeather={this.getWeather}/>
              <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
              />
            </div>
    );
  }
}

*/

/*
don't need to use 

constructor(){
    super()

     in latest version of react. However, for my convenience I included them.
*/
