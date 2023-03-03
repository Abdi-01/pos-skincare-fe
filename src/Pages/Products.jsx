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
    MDBBtn,
    MDBPaginationItem,
    MDBPaginationLink,
    MDBPagination
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
                                    <MDBBtn href='/category'>Create</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='6'>
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardTitle>Create Product</MDBCardTitle>
                                    
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
                                src='https://images.unsplash.com/photo-1566958769312-82cef41d19ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Cetaphil</MDBCardTitle>
                                <MDBCardText>
                                    Face Wash Cica Series 
                                </MDBCardText>
                                <MDBCardText>
                                    Rp.65.000
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
                                src='https://images.unsplash.com/photo-1566958769312-82cef41d19ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Cetaphil</MDBCardTitle>
                                <MDBCardText>
                                    Face Wash Cica Series 
                                </MDBCardText>
                                <MDBCardText>
                                    Rp.65.000
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
                                src='https://images.unsplash.com/photo-1566958769312-82cef41d19ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Cetaphil</MDBCardTitle>
                                <MDBCardText>
                                    Face Wash Cica Series 
                                </MDBCardText>
                                <MDBCardText>
                                    Rp.65.000
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
                                src='https://images.unsplash.com/photo-1566958769312-82cef41d19ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Cetaphil</MDBCardTitle>
                                <MDBCardText>
                                    Face Wash Cica Series 
                                </MDBCardText>
                                <MDBCardText>
                                    Rp.65.000
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
                                src='https://images.unsplash.com/photo-1566958769312-82cef41d19ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Cetaphil</MDBCardTitle>
                                <MDBCardText>
                                    Face Wash Cica Series 
                                </MDBCardText>
                                <MDBCardText>
                                    Rp.65.000
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
                                src='https://images.unsplash.com/photo-1566958769312-82cef41d19ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Cetaphil</MDBCardTitle>
                                <MDBCardText>
                                Face Wash Cica Series 
                                </MDBCardText>
                                <MDBCardText>
                                    Rp.65.000
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
                                src='https://images.unsplash.com/photo-1566958769312-82cef41d19ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Cetaphil</MDBCardTitle>
                                <MDBCardText>
                                Face Wash Cica Series 
                                </MDBCardText>
                                <MDBCardText>
                                    Rp.65.000
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
                                src='https://images.unsplash.com/photo-1566958769312-82cef41d19ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Cetaphil</MDBCardTitle>
                                <MDBCardText>
                                    Face Wash Cica Series 
                                </MDBCardText>
                                <MDBCardText>
                                    Rp.65.000
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
                
        <MDBContainer className='align-items-center justify-center'>
        <nav aria-label='Page navigation example '>
        <MDBPagination className='mb-0 '>
        <MDBPaginationItem>
        <MDBPaginationLink href='#'>Previous</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
        <MDBPaginationLink href='#'>1</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
        <MDBPaginationLink href='#'>2</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
        <MDBPaginationLink href='#'>3</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
        <MDBPaginationLink href='#'>Next</MDBPaginationLink>
        </MDBPaginationItem>
        </MDBPagination>
        </nav>
        </MDBContainer>

            </div>

        </MDBContainer>

    );
}