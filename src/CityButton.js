import React from 'react';

const CityButton = props => {
  return (
    <div className='city-button'>
      <h2>{props.title}</h2>
      <button class='ui button' onClick={((event) => props.handleClick(event, props))} value={props.woeid}>Submit</button>
    </div>
  )
}

export default CityButton;
