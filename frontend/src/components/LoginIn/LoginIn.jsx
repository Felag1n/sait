import React from 'react'
import { Link } from 'react-router-dom'
import  './LoginIn.css';
const Login = () => {
  return (
    <>
        <div className="container">
            <h1>Login</h1>
            <form action="">
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <div className="recover">
                    <a href="#">Forgot password</a>
                </div>
            </form>
            <button>Login</button>
            <div className="member">
                Don't have an account? <Link to='/register'>Sign Up</Link>
            </div>
        </div>
    </>
  )
}

export default Login