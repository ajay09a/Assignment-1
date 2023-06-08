import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div id='login'>
        <div className='heading'>
            <h1>Startup</h1>
            <p>Login</p>
        </div>
        <form>
            <label>Username</label>
            <input placeholder='Enter Mobile or Email' />
            <button>Log in</button>
        </form>
        <div className='register'>
            <p>New User? Please </p>
            <NavLink to='/register'>Register</NavLink>
        </div>
    </div>
  )
}

export default Login