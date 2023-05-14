import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { gicon } from '../assets';

const Login = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    // event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    await firebase.signInUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate('/');
    }
  }, [firebase, navigate]);

  return (
    <div className='container py-5'>
      <h1 className='text-center m-5'>
        <u>Login Page</u>
      </h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className='mb-3'>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type='email'
              placeholder='Enter email'
              required
            />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type='invalid'>
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type='password'
              placeholder='Password'
              autoComplete='on'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type='submit'>Login</Button>
      </Form>
      <h4 className='my-5 text-center'>
        <em>OR</em>
      </h4>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <Button variant='danger' onClick={firebase.signinWithGoogle}>
          <img
            src={gicon}
            alt='google'
            className='img-fluid'
            style={{ width: '30px', height: '30px' }}
          />{' '}
          Google Login
        </Button>
      </div>
      <h4 className='my-5 text-center'>
        <p>
          don't have a account <Link to={'/register'}>register</Link>{' '}
        </p>
      </h4>
    </div>
  );
};

export default Login;
