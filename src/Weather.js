import React, {Component} from 'react';
import UserForm from './UserForm.js'
import CityButton from './CityButton.js'
import WeatherCard from './WeatherCard.js';

export default class Weather extends Component {
  constructor() {
    super()
    this.state = {
      location: '',
      searchResults: [],
      userWeather: [],
      showSearch: true,
      chosenCity: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleClick(event, value) {
    event.preventDefault();
    let woeid = value.woeid
    let city = value.title

    // Toggle view from search to weather view
    this.setState({
       chosenCity: city,
       showSearch: false,
      })
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://www.metaweather.com/api/location/${woeid}/`;

    fetch(proxyurl + url)
    .then(results => {
      return results.json();
    })
    .then(data => {
      let weather = data.consolidated_weather;
      this.setState({ userWeather: weather })
    })
  }

  // This function checks if search results are length of 1
  // If so, it immediately renders the weather!

  async checkLength() {
    if(this.state.searchResults.length === 1) {
      let searchResults = this.state.searchResults[0].title

      this.setState({
         chosenCity: searchResults,
         showSearch: false,
        })

      let woeid = this.state.searchResults[0].woeid;

      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = `https://www.metaweather.com/api/location/${woeid}/`;

      fetch(proxyurl + url)
      .then(results => {
        return results.json();
      })
      .then(data => {
        let weather = data.consolidated_weather;
        this.setState({ userWeather: weather })
      })
    } else if(this.state.searchResults.length === 0) {

    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ showSearch: true })

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://www.metaweather.com/api/location/search/?query=${this.state.location}`;

    fetch(proxyurl + url)
    .then(results => {
      return results.json();
    })
    .then(data => {
      let search = data
      this.setState({ searchResults: search }, () => {this.checkLength() });
    })
    .catch(() => console.log('Something went wrong!'))
  }

  render() {

    let searchResults = this.state.searchResults;
    let userWeather = this.state.userWeather;
    let showSearch = this.state.showSearch;
    let chosenCity = this.state.chosenCity;

    return (

      <div className='weather'>

        <div className='inputBox'>
          <UserForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} state={this.state} />
        </div>

        <div className='city-title'>
          {chosenCity &&
            <h1>Weather for {chosenCity}</h1>
          }
        </div>

        {showSearch ? (

          <div className='search-box'>

            <div className='search-title'>
              {searchResults.length > 0 &&
                <h2>Which city did you mean?</h2>
              }
            </div>

            <div className='search-results'>
              {searchResults.length > 0 &&
              searchResults.map((city) =>
              <CityButton key={city.title} state={this.state} woeid={city.woeid} title={city.title} handleClick={this.handleClick} />
              )
            }
            </div>
          </div>
        ) : (

          <div className='weather-display'>
          {userWeather.length > 0 &&
            userWeather.map((day) =>
            <WeatherCard key={day.id} day={day} date={day.applicable_date} state={this.state} />
            )
          }
        </div>
        )}

      </div>
    )
  }
}
