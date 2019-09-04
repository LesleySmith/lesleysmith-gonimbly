import React from 'react';

const UserForm = props => {
  return (
    <div className='form'>
      <form onSubmit={props.handleSubmit}>

      <label htmlFor='location'><h3>City:</h3> </label>
      <input type='text' name='location' value={props.state.location} onChange={props.handleChange}></input>

      <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default UserForm;
