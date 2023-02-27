import React from 'react';
import {
    MDBContainer,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBContainer className='my-5'>
            <div>
                <MDBRow className='my-5'>
                    <MDBRow>
                        <MDBCol sm='6'>
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardTitle>Create Category</MDBCardTitle>
                                    <MDBCardText>
                                        With supporting text below as a natural lead-in to additional content.
                                    </MDBCardText>
                                    <MDBBtn href='/category'>Create</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='6'>
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardTitle>Create Product</MDBCardTitle>
                                    <MDBCardText>
                                        With supporting text below as a natural lead-in to additional content.
                                    </MDBCardText>
                                    <MDBBtn href='/new-product'>Create</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>

                </MDBRow>
            </div>
            <div>
                <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardImage
                                src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    This is a longer card with supporting text below as a natural lead-in to additional content.
                                    This content is a little bit longer.
                                </MDBCardText>
                                <MDBBtn className='me-1' id='primary'>
                                    Add Cart
                                </MDBBtn>
                                <MDBBtn className='me-1' id='secondary'>
                                    Order
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardImage
                                src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    This is a longer card with supporting text below as a natural lead-in to additional content.
                                    This content is a little bit longer.
                                </MDBCardText>
                                <MDBBtn className='me-1' color='danger'>
                                    Add Cart
                                </MDBBtn>
                                <MDBBtn className='me-1' color='danger'>
                                    Order
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardImage
                                src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    This is a longer card with supporting text below as a natural lead-in to additional content.
                                    This content is a little bit longer.
                                </MDBCardText>
                                <MDBBtn className='me-1' color='danger'>
                                    Add Cart
                                </MDBBtn>
                                <MDBBtn className='me-1' color='danger'>
                                    Order
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardImage
                                src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    This is a longer card with supporting text below as a natural lead-in to additional content.
                                    This content is a little bit longer.
                                </MDBCardText>
                                <MDBBtn className='me-1' color='danger'>
                                    Add Cart
                                </MDBBtn>
                                <MDBBtn className='me-1' color='danger'>
                                    Order
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>

        </MDBContainer>

    );
}