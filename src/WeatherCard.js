import React from 'react';

const WeatherCard = props => {

  let baseNum = Math.floor(props.day.the_temp);
  let farenheit = Math.floor((baseNum * (9/5)) + 32);
  let weatherico = props.day.weather_state_abbr;

  return (
    <div className='weather-card'>
      <h3>{props.date}</h3>
      <h3>Average Temp:</h3>
      <p>{farenheit} Farenheit</p>
      <img alt='weathericon' src={ require(`./images/${weatherico}.svg`)}></img>
    </div>
  )
}

export default WeatherCard;
