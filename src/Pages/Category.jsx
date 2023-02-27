import React, { useState } from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import {
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
    MDBTextArea,
} from 'mdb-react-ui-kit';

function Category() {
    const [staticModal, setStaticModal] = useState(false);

    const toggleShow = () => setStaticModal(!staticModal);
    return (
        <MDBContainer className='my-5'>
            
            <div>
                <MDBRow className='justify-content-center'>
                    <MDBCol lg='6'>
                        <form>
                            <MDBInput className='mb-4' label='Name Category' />


                            <MDBBtn id='primary' type='submit' block className='mb-4'>
                                Create Category
                            </MDBBtn>
                        </form>
                    </MDBCol>
                </MDBRow>
            </div>
            <MDBTable align='middle'>
                <MDBTableHead light>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Category</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                        <th scope='row'>1</th>
                        <td>Sit</td>
                        <td>
                            <MDBBtn color='link' size='sm'>
                                <i className='fas fa-times'></i>
                            </MDBBtn>
                        </td>
                    </tr>
                    <tr>
                        <th scope='row'>2</th>
                        <td>Elit</td>
                        <td>
                            <MDBBtn color='link' size='sm'>
                                <i className='fas fa-times'></i>
                            </MDBBtn>
                        </td>
                    </tr>
                    <tr>
                        <th scope='row'>3</th>
                        <td>Fugiat</td>
                        <td>
                            <MDBBtn color='link' size='sm'>
                                <i className='fas fa-times'></i>
                            </MDBBtn>
                        </td>
                    </tr>
                </MDBTableBody>
            </MDBTable>


        </MDBContainer>
    )

}

export default Category;