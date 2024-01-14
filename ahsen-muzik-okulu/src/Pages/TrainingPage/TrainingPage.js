
import React from 'react'
import Training from '../../Components/Training';
import { Container } from 'react-bootstrap';

const TrainingPage = () => {
  return (
    <>
      
   
          <div className='container-fluid' style={{ backgroundColor: '#111111'}}>
        <h1 className='display-5 text-center p-4' style={{ color: '#F5E8B7' }}>Eğitimlerimiz</h1>
      <div className='container m-0 p-0 mx-auto text-center p-3'>
        <div className='row m-0 p-0 gap-2 justify-content-center'>
          <div className='col-md-5 '>
            <Training TrainingName={"Saz Eğitimi"} TrainingUrl={"/public/saz.jpg.jpg"} TrainingDescription={"Saz, genelde daha melodik ve armonik müziği çalabilen bir çalgıyken, bağlama ise daha ritmik ve perdeli müziği çalabilen bir çalgıdır"} />
          </div>
          <div className='col-md-5'>
            <Training TrainingName={"Gitar Eğitimi"} TrainingUrl={"/public/Gitar.jpg.png"} TrainingDescription={"Gitar en sade hali ile gövde, sap, burgular ve tellerden meydana gelen telli müzik aletidir.Türleri;Klasik,Akustik,Elektro,Bas,Perdesiz,Lap steel,7-12 telli ve Weissenborn'dur."} />
          </div>
          
          <div className='col-md-5'>
            <Training TrainingName={"Ud Eğitimi"} TrainingUrl={"/public/Ud.jpg.jpg"} TrainingDescription={"geleneksel Türk çalgıları arasında da yer alan telli ve mızraplı bir çalgıdır. Arapçadaki ismi sarısabır anlamına gelen el-oud kelimesinden dilimize geçen ud; perdesiz bir enstrümandır."} />
          </div>
          <div className='col-md-5'>
            <Training TrainingName={"Bateri Eğitimi"} TrainingUrl={"/public/Bateri.jpg.png"} TrainingDescription={"Bateri, davullar ve ziller başta olmak üzere vurmalı çalgılardan oluşan bir müzik enstrümanıdır."} />
          </div>
          <div className='col-md-5'>
            <Training TrainingName={"Ney Eğitimi"} TrainingUrl={"/public/ney.jpg.png"} TrainingDescription={"Ney ses rengi olarak insan sesine en yakın çalgılardan biridir. Her türlü müzikâl motifi icrâ etmeye imkan tanır. Üç oktavlık ses sâhası içindeki tüm sesleri, nefes şiddetini veya dudağın başpâre ile yaptığı açıyı değiştirmek sûretiyle koma koma (hattâ cent cent) verebilir."} />
          </div>
          <div className='col-md-5'>
            <Training TrainingName={"Piyano Eğitimi"} TrainingUrl={"/public/Piyano.jpg.png"} TrainingDescription={"Akustik, tuşlu bir müzik aletidir. Piyanoda ses, teller vasıtasıyla elde edilir. Piyanonun tuşlarına basıldığında içindeki tahta çekiç tellere vurarak sesi oluşturur.Piyano modelleri akustik, dijital ve taşınabilir piyanolar olarak 3 'e ayrılır. Bu modeller kendi içinde duvar tipi dijital piyanolar, dijital kuyruklu piyanolar, duvar tipi akustik piyanolar ve kuyruklu akustik piyanolar olmak üzere 4'e ayrılır."} />
          </div>

        </div>
      </div>
      </div>

   
    </>
  )
}

export default TrainingPage;