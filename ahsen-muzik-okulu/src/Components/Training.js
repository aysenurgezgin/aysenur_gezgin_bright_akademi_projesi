import React from 'react'
import { Container } from 'react-bootstrap';



const Training = ({TrainingName,TrainingUrl,TrainingDescription}) => {
  return (
    <>
   <div id='training-card' className="card">
                <img id='training-image' src={TrainingUrl} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                    <h3 className="card-title">{TrainingName}</h3>
                    <p className="card-text fs-5">{TrainingDescription}</p>
                    <a id='training-card-btn' href={TrainingUrl} className="btn btn-primary fs-5">Detaylı Bilgi</a>
                </div>
            </div>
    </>
  )
}

export default Training;