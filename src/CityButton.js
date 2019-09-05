import React from 'react';

const CityButton = props => {
  return (
    <div className='city-button'>
      <button className='button-design' class='ui primary button design' onClick={((event) => props.handleClick(event, props))} value={props.woeid}>{props.title}</button>
    </div>
  )
}

export default CityButton;
