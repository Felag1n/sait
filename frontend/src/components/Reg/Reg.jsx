import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  './Reg.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const usernameRegex = /^[a-zA-Z0-9]{5,}$/; // Username should be at least 5 characters long and contain only alphanumeric characters
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // Password should be minimum eight characters, at least one uppercase letter, one lowercase letter and one number
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Simple email validation
  const phoneNumberRegex = /^\d{10}$/; // Phone number should be 10 digits

  const isUsernameValid = usernameRegex.test(username);
  const isPasswordValid = passwordRegex.test(password);
  const isPasswordsMatch = password === confirmPassword;
  const isEmailValid = emailRegex.test(email);
  const isPhoneNumberValid = phoneNumberRegex.test(phoneNumber);

  const isFormValid = isUsernameValid && isPasswordValid && isPasswordsMatch && isEmailValid && isPhoneNumberValid;

  return (
    <>
        <div className="container">
            <h1>Sign Up</h1>
            <form action="">
    <input 
        type="text" 
        placeholder='Username' 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
    />
    {username && !isUsernameValid && <p>Username should be at least 5 characters long and contain only alphanumeric characters</p>}

    <input 
        type="password" 
        placeholder='Password' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
    />
    {password && !isPasswordValid && <p>Password should be minimum eight characters, at least one uppercase letter, one lowercase letter and one number</p>}

    <input 
        type="password" 
        placeholder='Re-Enter Password' 
        value={confirmPassword} 
        onChange={(e) => setConfirmPassword(e.target.value)} 
    />
    {confirmPassword && !isPasswordsMatch && <p>Passwords do not match</p>}

    <input 
        type="email" 
        placeholder='Email' 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
    />
    {email && !isEmailValid && <p>Please enter a valid email</p>}

    <input 
        type="tel" 
        placeholder='Phone Number' 
        value={phoneNumber} 
        onChange={(e) => setPhoneNumber(e.target.value)} 
    />
    {phoneNumber && !isPhoneNumberValid && <p>Phone number should be 10 digits</p>}
</form>


            <div className="terms">
                <input type="checkbox"  id="checkbox" />
                <label htmlFor="checkbox">I agree to the <a href="#">Terms & Condition</a></label>
            </div>
            <button disabled={!isFormValid}>Sign Up</button>
            <div className="member">
                Already have an account? <Link to='/'>Login</Link>
            </div>
        </div>
    </>
  )
}

export default SignUp
