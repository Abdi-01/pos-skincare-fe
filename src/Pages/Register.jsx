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

import axios from 'axios';
import { API_URL } from '../helper';
import { useNavigate } from 'react-router-dom';

function Register() {

  const [show, setShow] = React.useState(false)
    // const handleClick = () => setShow(!show)
    const navigate = useNavigate()

    //add new user
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [role, setRole] = React.useState("");
    let token = localStorage.getItem("skincare_login");


    const btnAddNewUser = async () => {
        try {
            let res = await axios.post(`${API_URL}/user/regis`, {
                name: name, 
                email: email,
                username: username,
                phone: phone,
                password: password,
                role: role
            }, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            console.log(`ini dari resp addnewuser`, res);
            if (res.data.success) {
                alert("registrasi berhasil");
                navigate("/user")

            }

        } catch (error) {
            console.log("ini error addnewuser :", error);
            alert(error.response.data.message)
        }
    }

  return (
    <MDBContainer fluid className='mt-5'>
      <section>
        <MDBRow className='justify-content-center'>
          <MDBCol lg='4'>
            <form>
              

              <MDBInput className='mb-4' onChange={(e) => setUsername(e.target.value)} type='username' id='username' label='Username' />
              <MDBInput className='mb-4' onChange={(e) => setEmail(e.target.value)} type='email' id='email2' label='Email address' />
              <MDBInput className='mb-4' onChange={(e) => setPassword(e.target.value)} type='password' id='password2' label='Password' />
              {/* <MDBInput className='mb-4' onChange={(e) => setPassword(e.target.value)} type='password' id='password2' label='Confirmation Password' /> */}
              <MDBInput className='mb-4' onChange={(e) => setPhone(e.target.value)} type='text' id='text' label='Phone Number' />
              <MDBInput className='mb-4' onChange={(e) => setRole(e.target.value)} type='text' id='text' label='Role Member' />

              {/* <MDBRow className='mb-4 justify-content-center'>
                <MDBCol md='6' className='d-flex justify-content-center'>
                  <MDBCheckbox className=' mb-3 mb-md-0' defaultChecked label=' Subscribe to our newsletter' />
                </MDBCol>
              </MDBRow> */}

              <MDBBtn onClick={btnAddNewUser} type='button' block className='mb-4'>
                Sign up
              </MDBBtn>

              {/* <div className='text-center'>
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

export default Register;
