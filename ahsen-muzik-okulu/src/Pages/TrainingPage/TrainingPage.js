
import React from 'react'
import Training from '../../Components/Training';
import { Container } from 'react-bootstrap';

const TrainingPage = () => {
  return (
    <>
       <Container fluid>
   <div className='vh-100 d-flex justify-content align-items-center flex-column'>
          <h1 className='display-4 text-dark text-center'>Eğitimlerimiz</h1>
          <p className='display-6 text-dark text-center'>
         2 Ayrı ana sınıftan oluşan müzik türümüzle sizin ruhunuza hitap eden müzik enstirümanını daha iyi tanımanızı önemsiyoruz</p>
         <p className='display-6 text-dark text-center'>
            Eğitimlerimiz sürecinde düzenli katılımlarınızı bekliyoruz.Ve size en yakın olanşubemiz de yüz yüze görüşmeye bekliyoruz.
         </p>
          </div>

   </Container>
    </>
  )
}

export default TrainingPage;