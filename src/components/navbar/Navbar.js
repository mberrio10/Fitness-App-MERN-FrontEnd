import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './navbar.css';

function Navbar() {
  const {user, dispatch} = useContext(Context);
  const PF = 'http://localhost:5000/images/'

  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
  }

  return (
    <nav className='navbar fixed-top navbar-expand-lg'>
      <div className='container-fluid'>
        <div className="blog-logo flex-fill">
          <a className='navbar-brand' href='/#'>
            Navbar
          </a>
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#collapseBlogNav'
          aria-controls='collapseBlogNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='collapseBlogNav'>
          <div className='navbar-nav flex-fill'>
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="posts">Articles</Link>
            <Link className='nav-link' to="posts">Exercises</Link>
            <Link className='nav-link' to="posts">Personal Training</Link>
          </div>
          <div className='user-photo dropdown'>
            {
              user ? (
                <>
                  <img className='navImage dropdown-toggle' src={PF + user.profilePic} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" alt='Avatar' />
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item" to="/settings">Profile</Link></li>
                    <li><Link className="dropdown-item" to="/create">Compose</Link></li>
                    <li className="dropdown-item" onClick={handleLogout}>{user && "Sing out"}</li>
                  </ul>
                </>
              ) : (
                // <i className='navImage fa-solid fa-circle-user'/>
                <div className="navbar-nav">
                  <Link className='nav-link' to="/login">Sign In</Link>
                  <Link className='nav-link' to="/register">Sign Up</Link>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;