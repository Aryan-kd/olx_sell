import React from 'react';
import { useFirebase } from '../context/Firebase';

import { Link } from 'react-router-dom';
import { logo } from '../assets';
import './css/Navbar.css';
import { IoAddCircle } from 'react-icons/io5';
import { BiLogIn } from 'react-icons/bi';

const NavbarComponent = () => {
  const firebase = useFirebase();
  // console.log(firebase);

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to={'/'}>
          <img
            className='d-inline-block align-text-top img-olxlogo'
            src={logo}
            alt='olxlogo'
          />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to={'/'}>
                Home
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link className='nav-link' to={'/nearme'}>
                NearMe
              </Link>
            </li> */}
          </ul>
          <ul className='navbar-nav ms-auto'>
            {firebase.isLoggedIn === true ? (
              <li className='nav-item dropdown'>
                <Link
                  className='nav-link dropdown-toggle'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <img
                    src={firebase.user.photoURL}
                    alt='user'
                    className='d-inline-block align-text-top user-img'
                  />
                </Link>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <Link className='dropdown-item' to={'/user/profile'}>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={firebase.loggedOut}
                      className='dropdown-item btn btn-outline-danger rounded'
                    >
                      <BiLogIn className='add-icon' /> Log Out
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <li className='nav-item'>
                <Link className='nav-link' aria-current='page' to={'/login'}>
                  <BiLogIn className='add-icon' /> Login
                </Link>
              </li>
            )}
            <li className='nav-item'>
              <Link className='nav-link text-danger' to={'/sell'}>
                <IoAddCircle className='add-icon' /> Sell
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
