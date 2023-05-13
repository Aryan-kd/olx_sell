import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
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
      image
    );

    setDesc('');
    setImage('');
    setName('');
    setPhone('');
    setPrice('');
    setPincode('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <MDBContainer fluid>
        <MDBRow className='justify-content-center align-items-center m-5'>
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
                    size='lg'
                    id='form1'
                    type='text'
                  />
                </MDBCol>

                <MDBCol md='6'>
                  <MDBInput
                    wrapperClass='mb-4'
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    label='Price to Sell'
                    size='lg'
                    id='form2'
                    type='number'
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
                    size='lg'
                    id='form4'
                    type='number'
                  />
                </MDBCol>

                <MDBCol md='6'>
                  <MDBInput
                    wrapperClass='mb-4'
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    label='Phone Number'
                    size='lg'
                    id='form5'
                    type='rel'
                  />
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
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <Form.Group controlId='formFile' className='mb-3'>
                  <Form.Label>Upload Product Image (jpg, jpge, png)</Form.Label>
                  <Form.Control
                    type='file'
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </Form.Group>
              </MDBRow>
              <MDBBtn className='my-2' size='lg'>
                Submit
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </Form>
  );
};

export default ProductUpload;
