import React from 'react'

const AboutUsPage = () => {
  return (
    <>
    <div className='container-fluid dark align-items-center flex-end'>
        <h1 className='text-center p-4 fw-bold dark'>Hakkımızda</h1>
             <div className='container'>
               <div className='text-dark fs-5'>
   <p>Ahsen Müzik ailesi olarak notalarla olacak bu yolunuzda daima yanınızdayız.</p> 
   </div>
           
        </div>
  </div>
  
{ <div className='vh-100 d-flex justify-content align-items-center flex-column'>
          <h1 className='display-4 text-dark text-center'>Eğitimlerimiz</h1>
          <p className='display-6 text-dark text-center'>
         2 Ayrı ana sınıftan oluşan müzik türümüzle sizin ruhunuza hitap eden müzik enstirümanını daha iyi tanımanızı önemsiyoruz</p>
         <p className='display-6 text-dark text-center'>
            Eğitimlerimiz sürecinde düzenli katılımlarınızı bekliyoruz.Ve size en yakın olanşubemiz de yüz yüze görüşmeye bekliyoruz.
         </p>
          </div> }
  </>
  )
}

export default AboutUsPage;
