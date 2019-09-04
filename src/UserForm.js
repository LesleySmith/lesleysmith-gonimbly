import React from 'react';

const UserForm = props => {
  return (
    <div className='form'>

      <form onSubmit={props.handleSubmit}>

      <label htmlFor='location'>
        <div>
          <div class="ui large header">City:</div>
        </div>
      </label>

      <div class='ui icon input'>
        <input type='text' placeholder='Search for a city...' name='location' value={props.state.location} onChange={props.handleChange}></input>
        <i aria-hidden='true' class='search circular inverted link icon'></i>
      </div>

      <button class='ui button' type='submit'>Submit</button>

    </form>
    </div>
  )
}

export default UserForm;
