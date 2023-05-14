import React, { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
} from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';

const ProductUpload = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [type, setType] = useState('');
  const [phone, setPhone] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (firebase.user === null) {
      navigate('/login');
    }
  }, [firebase, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.handleCreateNewProduct(
      name,
      price,
      pincode,
      phone,
      desc,
      image,
      type,
      state
    );

    setDesc('');
    setImage('');
    setName('');
    setPhone('');
    setPrice('');
    setPincode('');
    setType('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center m-5'>
          <MDBCard>
            <MDBCardBody className='px-4'>
              <h3 className='fw-bold mb-4 pb-2 pb-md-0 mb-md-5'>
                Product Upload
              </h3>

              <MDBRow>
                <MDBCol md='6'>
                  <MDBInput
                    wrapperClass='mb-4'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    label='Product Name'
                    size='md'
                    type='text'
                    required
                  />
                </MDBCol>

                <MDBCol md='6'>
                  <MDBInput
                    wrapperClass='mb-4'
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    label='Price to Sell'
                    size='md'
                    type='number'
                    required
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md='6'>
                  <select
                    class='form-select mb-4'
                    aria-label='Default select example'
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                    required
                  >
                    <option selected>Type Of Product</option>
                    <option value='Electronic'>Electronic</option>
                    <option value='Vehicle'>Vehicle</option>
                    <option value='Clothes'>Clothes</option>
                    <option value='Household'>Household</option>
                    <option value='Cosmetics'>Cosmetics</option>
                    <option value='Other'>Other</option>
                  </select>
                </MDBCol>

                <MDBCol md='6'>
                  <MDBInput
                    wrapperClass='mb-4'
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    label='Phone Number'
                    minLength={10}
                    maxLength={10}
                    size='md'
                    type='tel'
                    required
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='6'>
                  <MDBInput
                    wrapperClass='mb-4'
                    onChange={(e) => setPincode(e.target.value)}
                    value={pincode}
                    label='Pincode'
                    minLength={6}
                    maxLength={6}
                    size='md'
                    type='text'
                    required
                  />
                </MDBCol>
                <MDBCol md='6'>
                  <select
                    class='form-select mb-4'
                    aria-label='Default select example'
                    onChange={(e) => setState(e.target.value)}
                    value={state}
                    required
                  >
                    <option selected>State</option>
                    <option value='Delhi'>Delhi</option>
                    <option value='Mumbai'>Mumbai</option>
                    <option value='Punjab'>Punjab</option>
                    <option value='Harayana'>Harayana</option>
                    <option value='Himachal Pradesh'>Himachal Pradesh</option>
                    <option value='Uttar Pradesh'>Uttar Pradesh</option>
                  </select>
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol>
                  <MDBTextArea
                    label='Description of Product'
                    maxLength={200}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    rows={3}
                    required
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <Form.Group controlId='formFile' className='mb-3'>
                  <Form.Label>Upload Product Image (jpg, jpge, png)</Form.Label>
                  <Form.Control
                    type='file'
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                  />
                </Form.Group>
              </MDBRow>
              <button className='btn btn-outline-secondary mx-auto my-2'>
                Submit
              </button>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </Form>
  );
};

export default ProductUpload;
