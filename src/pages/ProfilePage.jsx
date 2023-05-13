import React, { useEffect } from 'react';
import { useFirebase } from '../context/Firebase';
import { Link, useNavigate } from 'react-router-dom';

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from 'mdb-react-ui-kit';

const ProfilePage = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    if (firebase.user === null) {
      navigate('/');
    }
  }, [firebase, navigate]);

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className='py-5'>
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className='bg-light rounded-3 p-3 mb-4'>
              <MDBBreadcrumbItem>
                <Link to='/'>Home</Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <Link to='/'>User</Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg='4'>
            <MDBCard className='mb-4'>
              <MDBCardBody className='text-center'>
                <MDBCardImage
                  src={firebase.user === null ? '' : firebase.user.photoURL}
                  alt='avatar'
                  className='rounded-circle'
                  style={{ width: '150px' }}
                  fluid
                />
                {firebase.user === null ? (
                  ''
                ) : (
                  <p className='text-success my-1'>
                    {firebase.user.emailVerified === true
                      ? 'Verified User'
                      : 'Not-Verified User'}
                  </p>
                )}
                <p className='text-muted mb-4'>
                  {firebase.user === null
                    ? ''
                    : firebase.user.metadata.creationTime}
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg='8'>
            <MDBCard className='mb-4'>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm='3'>
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm='9'>
                    <MDBCardText className='text-muted'>
                      {firebase.user === null ? '' : firebase.user.displayName}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm='3'>
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm='9'>
                    <MDBCardText className='text-muted'>
                      {firebase.user === null ? '' : firebase.user.email}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm='3'>
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm='9'>
                    <MDBCardText className='text-muted'>
                      {firebase.user === null ? '' : firebase.user.phoneNumber}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm='3'>
                    <MDBCardText>Created At</MDBCardText>
                  </MDBCol>
                  <MDBCol sm='9'>
                    <MDBCardText className='text-muted'>
                      {firebase.user === null
                        ? ''
                        : firebase.user.metadata.creationTime}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm='3'>
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm='9'>
                    <MDBCardText className='text-muted'>Delhi</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default ProfilePage;
