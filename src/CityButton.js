import React from 'react';

const CityButton = props => {
  return (
    <div className='cityButton'>
      <h2>{props.title}</h2>
      <button onClick={((event) => props.handleClick(event, props))} value={props.woeid}>{props.title} is my city</button>
    </div>
  )
}

export default CityButton;
