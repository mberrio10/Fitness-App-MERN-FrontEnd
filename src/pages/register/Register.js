import './register.css'
// import axios from 'axios'
import { axiosInstance } from '../../config'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError (false)
    try {
      const res = await axiosInstance.post("/auth/register", {username,email,password}) 
      res.data && window.location.replace("/login")
    } catch (err) {
      setError(true)
    }
  }

  return (
    <main className='register d-flex flex-column align-items-center justify-content-center'>
        <span className="register-title">Register</span>
        <form className='register-form d-flex flex-column' onSubmit={handleSubmit}>   
            <label>User Name</label>
            <input type="text" className='register-input' placeholder='Enter your User Name...' onChange={e=>setUsername(e.target.value)} />
            <label>Email</label>
            <input type="email" className='register-input' placeholder='Enter your email...' onChange={e=>setEmail(e.target.value)}/>
            <label>Password</label>
            <input type="password" className='register-input' placeholder='Enter your password...' onChange={e=>setPassword(e.target.value)}/>
            {/* <label>Confirm Password</label>
            <input type="password" className='register-input' placeholder='Re-enter password...' /> */}
            <button className="register-button" type='submit'>Register</button>
        </form>
        <button className="register-login-button"><Link className='link' to="/login">Login</Link></button>
        {error && <span className='text-danger pt-3'>The username is taken! Try another.</span>}
    </main>
  )
}

export default Register