// import React, { Component } from 'react';
import React, { useState } from 'react';
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
    MDBInputGroup
} from 'mdb-react-ui-kit';

import {
    MDBCardImage,
    MDBSelect
}
    from 'mdb-react-ui-kit';

import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


function NewProduct(props) {
    const [fillActive, setFillActive] = useState('tab1');

    const handleFillClick = (value) => {
        if (value === fillActive) {
            return;
        }

        setFillActive(value);
    };
    return (
        <MDBContainer>
            <>
                <MDBTabs fill className='my-5'>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                            NEW PRODUCT
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
                            LIST PRODUCTS
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>
                    <MDBTabsPane show={fillActive === 'tab1'}>
                        <section>
                            <MDBRow className='justify-content-center'>
                                <MDBCol lg='12 '>

                                    <MDBCard className=' rounded-3' >


                                        <MDBCardBody className='px-5'>
                                            <MDBRow>
                                                <MDBCol size='6' sm='6'>
                                                    <h3 className="mb-4 pb-2 pb-md-0 px-md-2">New product</h3>
                                                    <MDBInput wrapperClass='mb-4' label='Name Product' id='form1' type='text' />
                                                    <div className='my-3'>
                                                        <>
                                                            <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='All Category' defaultChecked />
                                                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Default checkbox' />
                                                            <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Checked checkbox' />
                                                        </>
                                                    </div>


                                                    <MDBInputGroup className='mb-3' textBefore='$' textAfter='.00'>
                                                        <input className='form-control' type='text' />
                                                    </MDBInputGroup>

                                                    <MDBInputGroup
                                                        className='mb-3'
                                                        textAfter='Upload'
                                                        textTag='label'
                                                        textProps={{ htmlFor: 'inputGroupFile02' }}
                                                    >
                                                        <input className='form-control' type='file' id='inputGroupFile02' />
                                                    </MDBInputGroup>

                                                    <MDBRow>
                                                        <MDBCol md='6'>
                                                            <MDBInput wrapperClass='mb-4' label='Weight' id='form3' type='text' />
                                                        </MDBCol>
                                                    </MDBRow>

                                                    <MDBTextArea label='Description' id='textAreaExample' rows={5} />

                                                    <MDBBtn id='primary' className='my-3' size='lg'>Add Product</MDBBtn>
                                                </MDBCol>
                                                <MDBCol size='6' sm='6'>
                                                    <MDBCardImage src='https://cdn.shopify.com/s/files/1/0288/9859/0802/files/pf-8ef41e18-e685-40b7-8bdb-1bd151c2764d--imageskincare6733357623503794286227309010151941059626806n_grande.jpg?v=1614337787' className='w-100 rounded-top' alt="Sample photo" />
                                                </MDBCol>

                                            </MDBRow>


                                        </MDBCardBody>
                                    </MDBCard>

                                </MDBCol>
                            </MDBRow>
                        </section>

                    </MDBTabsPane>
                    <MDBTabsPane show={fillActive === 'tab2'}>
                        <MDBTable align='middle'>
                            <MDBTableHead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Status</th>
                                    <th scope='col'>Position</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <img
                                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                                alt=''
                                                style={{ width: '45px', height: '45px' }}
                                                className='rounded-circle'
                                            />
                                            <div className='ms-3'>
                                                <p className='fw-bold mb-1'>John Doe</p>
                                                <p className='text-muted mb-0'>john.doe@gmail.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>Software engineer</p>
                                        <p className='text-muted mb-0'>IT department</p>
                                    </td>
                                    <td>
                                        <MDBBadge color='success' pill>
                                            Active
                                        </MDBBadge>
                                    </td>
                                    <td>Senior</td>
                                    <td>
                                        <MDBBtn color='link' rounded size='sm'>
                                            Edit
                                        </MDBBtn>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <img
                                                src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                                                alt=''
                                                style={{ width: '45px', height: '45px' }}
                                                className='rounded-circle'
                                            />
                                            <div className='ms-3'>
                                                <p className='fw-bold mb-1'>Alex Ray</p>
                                                <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>Consultant</p>
                                        <p className='text-muted mb-0'>Finance</p>
                                    </td>
                                    <td>
                                        <MDBBadge color='primary' pill>
                                            Onboarding
                                        </MDBBadge>
                                    </td>
                                    <td>Junior</td>
                                    <td>
                                        <MDBBtn color='link' rounded size='sm'>
                                            Edit
                                        </MDBBtn>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <img
                                                src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                                                alt=''
                                                style={{ width: '45px', height: '45px' }}
                                                className='rounded-circle'
                                            />
                                            <div className='ms-3'>
                                                <p className='fw-bold mb-1'>Kate Hunington</p>
                                                <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>Designer</p>
                                        <p className='text-muted mb-0'>UI/UX</p>
                                    </td>
                                    <td>
                                        <MDBBadge color='warning' pill>
                                            Awaiting
                                        </MDBBadge>
                                    </td>
                                    <td>Senior</td>
                                    <td>
                                        <MDBBtn color='link' rounded size='sm'>
                                            Edit
                                        </MDBBtn>
                                    </td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </MDBTabsPane>
                </MDBTabsContent>
            </>

        </MDBContainer>




    )
}

export default NewProduct;