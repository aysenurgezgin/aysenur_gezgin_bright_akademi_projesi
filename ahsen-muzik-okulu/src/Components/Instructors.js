import React from 'react'

const Instructors = ({InstructorsDescription,InstructorsName,InstructorsUrl}) => {
  return (
    <>
   <div id='instructors' className="card">
                <img id='instructors-image' src={InstructorsUrl} className="card-img-top2" alt="..." />
                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                    <h3 className="card-title2">{InstructorsName}</h3>
                    <p className="card-text2 fs-5">{InstructorsDescription}</p>
                    <a id='instructors-card-btn2' href={InstructorsUrl} className="btn btn-primary fs-5">Detaylı Bilgi</a>
                </div>
            </div>
    </>
  )
}

export default Instructors;