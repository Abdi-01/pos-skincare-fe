import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardHeader,
  MDBCol,
  MDBCardBody,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
  MDBTabsContent,
  MDBIcon,
  MDBCheckbox,
  MDBInput,
  MDBBtn,
  MDBTextArea,
} from 'mdb-react-ui-kit';

function Register() {
  return (
    <MDBContainer fluid className='mt-5'>
      <section>
        <MDBRow className='justify-content-center'>
          <MDBCol lg='4'>
            <form>
              <MDBRow className='mb-4'>
                <MDBCol>
                  <MDBInput className='mb-4' id='first2' label='First name' />
                </MDBCol>
                <MDBCol>
                  <MDBInput className='mb-4' id='last2' label='Last name' />
                </MDBCol>
              </MDBRow>

              <MDBInput className='mb-4' type='email' id='email2' label='Email address' />
              <MDBInput className='mb-4' type='password' id='password2' label='Password' />

              <MDBRow className='mb-4 justify-content-center'>
                <MDBCol md='6' className='d-flex justify-content-center'>
                  <MDBCheckbox className=' mb-3 mb-md-0' defaultChecked label=' Subscribe to our newsletter' />
                </MDBCol>
              </MDBRow>

              <MDBBtn type='submit' block className='mb-4'>
                Sign up
              </MDBBtn>

              <div className='text-center'>
                <p>or sign up with:</p>
                <MDBBtn color='link' type='button' floating className='mx-1'>
                  <MDBIcon fab icon='facebook-f' />
                </MDBBtn>

                <MDBBtn color='link' type='button' floating className='mx-1'>
                  <MDBIcon fab icon='google' />
                </MDBBtn>

                <MDBBtn color='link' type='button' floating className='mx-1'>
                  <MDBIcon fab icon='twitter' />
                </MDBBtn>

                <MDBBtn color='link' type='button' floating className='mx-1'>
                  <MDBIcon fab icon='github' />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}

export default Register;
