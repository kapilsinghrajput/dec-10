import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className="loginn">

    <div className="loging_box">
        <h2>login</h2>
        <p>dont have any acoount?link</p>
        <div className="inp">

        <input type="text" placeholder ='enter username' />
        <input type="password" placeholder='password' />

        </div>

        <h3>forgate password?</h3>
        <h3>sign up</h3>
        <button ><Link to='/home'> login</Link></button>

    </div>
    </div>

    </>
  )
}

export default Login