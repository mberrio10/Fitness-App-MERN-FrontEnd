// import axios from 'axios'
import { axiosInstance } from '../../config'
import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './login.css'

const Login = () => {

  const userRef = useRef()
  const passwordRef = useRef()
  const {dispatch, isFetching} = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({type: "LOGIN_START"})
    try {
      const res = await axiosInstance.post("/auth/login", { 
        username: userRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({type: "LOGIN_SUCCESS", payload: res.data})
    } catch (err) {
      dispatch({type: "LOGIN_FAILURE"})
    }
  }

  console.log(process.env);

  return (
    <div className='login d-flex flex-column align-items-center justify-content-center'>
        <span className="login-title">Login</span>
        <form className='login-form d-flex flex-column' onSubmit={handleSubmit}>   
            <label>Username</label>
            <input type="text" className='login-input' placeholder='Enter your username...' ref={userRef} />
            <label>Password</label>
            <input type="password" className='login-input' placeholder='Enter your password...' ref={passwordRef}/>
            <button className="login-button" type='submit' disabled={isFetching}>Login</button>
        </form>
        <button className="login-register-button"><Link className='link' to="/register">Register</Link></button>
    </div>
  )
}
 
export default Login