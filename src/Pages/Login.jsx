import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../helper';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/data';
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

function Login() {
    const [show, setShow] = React.useState(false);
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () => setShow(!show);

  const onBtnLogin = async () => {
    try {
        if (username == '' || password == '') {
            alert('Fill in all form');
        } else {
            let response = await axios.post(`${API_URL}/user/login`, {
                username: username,
                password: password
            });
            console.log("Check response login :", response.data);
            alert('login berhasil');
            localStorage.setItem("skincare_login", response.data.token)
            dispatch(loginAction(response.data))
            navigate("/", {replace: true})
            
        }
        
    } catch (error) {
        console.log(error);
    }
}
  return (
    <MDBContainer fluid className='mt-5'>
      <section>
        <MDBRow className='justify-content-center'>
          <MDBCol lg='4'>
            <form>
              <MDBInput onChange={(e) => setUsername(e.target.value)} className='mb-4' type='username' id='loginName' label='Email or username' />

              <MDBInput onChange={(e) => setPassword(e.target.value)} className='mb-4' type='password' id='loginPassword' label='Password' />

              {/* <MDBRow className='mb-4'>
                <MDBCol md='6' className='d-flex justify-content-center'>
                  <MDBCheckbox className=' mb-3 mb-md-0' defaultChecked label=' Remember me' />
                </MDBCol>

                <MDBCol md='6' className='d-flex justify-content-center'>
                  <a href='#!'>Forgot password?</a>
                </MDBCol>
              </MDBRow> */}

              <MDBBtn onClick={onBtnLogin} type='button' block className='mb-4'>
                Sign in
              </MDBBtn>

              {/* <div className='text-center'>
                <p>
                  Not a member? <a href='#!'>Register</a>
                </p>
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
              </div> */}
            </form>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}

export default Login;