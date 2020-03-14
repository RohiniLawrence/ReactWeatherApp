import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SearchBar from './SearchBar';

//handles the search bar---------
class SearchComp extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    description: "", icon: "", temp: "", feelsLike: "", pressure: "", humidity: "", display: "none"
  }
  //passing term from <SearchBar >
  onSearchSubmit = async (term) => {
    const response = await axios.get('http://api.openweathermap.org/data/2.5/weather?appid=7a2208328d5ff2ddaec281da846d9d80', {
      params: { q: term },
    });
    console.log(response);
    this.setState({
      display: "block",
      description: response.data.weather[0].description,
      icon: "//openweathermap.org/img/wn/" + response.data.weather[0].icon + "@2x.png",
      temp: (response.data.main.temp - 273).toPrecision(2) + " C°", feelsLike: (response.data.main.feels_like - 273).toPrecision(2) + " C°", pressure: response.data.main.pressure, humidity: response.data.main.humidity
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div style={{ display: this.state.display }}>
          <div class="ui horizontal  segments"  >
            <div class="ui segment" style={{ width: '25%', margin: 'auto' , textAlign:'center'}}>
              <img src={this.state.icon} alt="forecast" />
            </div >
            <div class="ui segment" style={{ width: '75%', margin: 'auto' }}>
              <div class="ui vertical  segments"  >
                <div class="ui segment" style={{ margin: 'auto' }}>
                 <b>Description: </b> {this.state.description} 
                </div>
                <div class="ui segment" style={{ margin: 'auto' }}>
                <b>Temperature: </b> {this.state.temp}<br></br>
                
                </div>
                <div class="ui segment" style={{ margin: 'auto' }}>
                <b>Feel Like: </b>{this.state.feelsLike}
                </div>
                <div class="ui segment" style={{ margin: 'auto' }}>
                <b>Pressure: </b> {this.state.pressure}
                </div>
                <div class="ui segment" style={{ margin: 'auto' }}>
                <b>Humidity: </b> {this.state.humidity}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}


class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ margin: '10px' }}>
        <SearchComp />
      </div>
    );
  }
}

export default App;
