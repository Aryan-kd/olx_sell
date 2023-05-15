import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import './css/Footer.css';
import { phoneApp } from '../assets';

const Footer = () => {
  return (
    <div
      className='container-fluid'
      style={{ position: 'relative', bottom: '0px', width: '100%' }}
    >
      <div id='foot1' style={{ backgroundColor: '#ebeeef', width: '100%' }}>
        <div style={{ display: 'flex' }}>
          <img style={{ marginLeft: '10%' }} src={phoneApp} alt='OLX Footer' />
          <div style={{ width: '30%', marginTop: '10px', marginLeft: '2%' }}>
            <h1 style={{ color: '#0d3639' }}>Try the OLX SELL</h1>
            <h5 style={{ color: '#0d3639', marginTop: '20px' }}>
              Buy, sell and find just about anything using our website.
            </h5>
          </div>
        </div>
      </div>

      <div id='links-footer' className='row'>
        <ul className='col'>
          <li
            style={{
              fontWeight: 'bold',
              fontSize: '15px',
              color: 'rgb(0, 47, 82)',
            }}
          >
            POPULAR CATEGORIES
          </li>
          <li>Cars</li>
          <li>Flats for rent</li>
          <li>Jobs</li>
          <li>Mobile Phones</li>
        </ul>

        <ul className='col'>
          <li
            style={{
              fontWeight: 'bold',
              fontSize: '15px',
              color: 'rgb(0, 47, 82)',
            }}
          >
            About US
          </li>
          <li>
            <Link className='Link' style={{ textDecoration: 'none' }}>
              Website Creator
            </Link>
          </li>
          <li>
            <Link className='Link' style={{ textDecoration: 'none' }}>
              About US
            </Link>
          </li>
          <li>
            <Link className='Link' style={{ textDecoration: 'none' }}>
              Contact US
            </Link>
          </li>
          <li>
            <Link className='Link' style={{ textDecoration: 'none' }}>
              OLX for business
            </Link>
          </li>
        </ul>

        <ul className='col'>
          <li
            style={{
              fontWeight: 'bold',
              fontSize: '15px',
              color: 'rgb(0, 47, 82)',
            }}
          >
            FOLLOW US
          </li>
          <li
            style={{
              color: 'rgb(0, 47, 82)',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <FaFacebook /> Facebook
          </li>
          <li
            style={{
              color: 'rgb(0, 47, 82)',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <AiFillGithub /> Github
          </li>
          <li
            style={{
              color: 'rgb(0, 47, 82)',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <AiFillYoutube /> YouTube
          </li>
        </ul>
      </div>
      <div
        className='text-light d-flex align-items-center justify-content-between'
        style={{
          backgroundColor: '#002f34',
          minHeight: '50px',
          lineHeight: '50px',
        }}
      >
        <div style={{ marginLeft: '5%' }}>
          Other Countries Pakistan - South Africa - Indonesia
        </div>
        <div style={{ marginRight: '5%' }}>
          All rights reserved &copy; 2023 Aryan & team
        </div>
      </div>
    </div>
  );
};

export default Footer;
