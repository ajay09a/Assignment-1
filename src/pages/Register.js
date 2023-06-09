import React from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
  return (
    <div id='register'>
        <div className='heading'>
            <h1>Startup</h1>
            <p>Login</p>
        </div>
        <form>
            <label>Country</label>
            <select name='Country'>
                <option value='all'>All Country</option>
            </select>
            <label>Startup Name</label>
            <input placeholder='Ex: Startupz World' />
            <label>Mobile</label>
            <input placeholder='Your 10 digit number' />
            <label>Email</label>
            <input placeholder='Ex: deepak@gmail.com' />
            <button>Log in</button>
        </form>
        <div className='register'>
            <p>Returning User? Please </p>
            <NavLink to='/login'>Signin</NavLink>
        </div>
    </div>
  )
}

export default Register