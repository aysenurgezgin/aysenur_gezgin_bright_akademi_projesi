import React from 'react'
import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <>
        <Container fluid>
          <div className='vh-100 d-flex justify-content align-items-center flex-column'>
          <h1 className='display-4 text-dark text-center'>Hoş Geldiniz</h1>
          <p className='display-6 text-dark text-center'> Kaliteli müziğin adresi</p>
          </div>
        </Container>
        
     </>
  )
}

export default HomePage;