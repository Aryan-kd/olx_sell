import React from 'react';
import { useFirebase } from '../context/Firebase';

import { Link } from 'react-router-dom';
import { logo } from '../assets';
import './css/Navbar.css';
import { CiSearch } from 'react-icons/ci';
import { IoAddCircle } from 'react-icons/io5';
import { BiLogIn } from 'react-icons/bi';

const NavbarComponent = () => {
  const firebase = useFirebase();
  // console.log(firebase);
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-2'>
      <div className='container-fluid'>
        <Link className='navbar-brand px-2 py-2 rounded' to={'/'}>
          <img className='img-fluid img-olxlogo' src={logo} alt='olxlogo' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0  w-25'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to={'/'}>
                Home
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <Link
                className='nav-link dropdown-toggle'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                State
              </Link>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <Link className='dropdown-item' to={'/state?st=delhi'}>
                    Delhi
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' href={'/state?st=punjab'}>
                    Punjab
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' href={'/state?st=mumbai'}>
                    Mumbai
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to={'/state?st=hp'}>
                    Himachal Pradesh
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className='d-flex mx-auto width-navbar-auto'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Item you want'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              <CiSearch className='add-icon' />
            </button>
          </form>
          <ul className='navbar-nav ml-auto mb-2 mb-lg-0 w-25'>
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
                    className='user-img'
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
              <li className='nav-item mx-auto'>
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to={'/login'}
                >
                  <div className='btn btn-outline-success rounded'>
                    <BiLogIn className='add-icon' /> Login
                  </div>
                </Link>
              </li>
            )}
            <li className='nav-item mx-auto'>
              <Link
                className='nav-link active'
                aria-current='page'
                to={'/sell'}
              >
                <div className='btn btn-outline-danger rounded'>
                  <IoAddCircle className='add-icon' /> Sell
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
