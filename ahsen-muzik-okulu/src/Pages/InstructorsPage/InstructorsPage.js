
import React from 'react'
import Instructors from '../../Components/Instructors';
import {  Container } from 'react-bootstrap';

const InstructorsPage = () => {
  return (
    <>
  <div className='container-fluid' style={{ backgroundColor: '#111111' }}>
      <h1 className='text-center display-3 text-white pt-4'>Eğitmenlerimiz</h1>
      <div className='container m-0 p-0 mx-auto text-center py-3'>
        <div className='row m-0 p-0 justify-content-around'>
          <div className='col-md-6'>
            <Instructors InstructorsName={"Lorem ipsum"} InstructorsDescriptionn={"saz"} InstructorsUrl={"Images/Trainer1.jpg"} />
          </div>
          <div className='col-md-6'>
            <Instructors InstructorsName={"Lorem ipsum"} InstructorsDescription={"2"} InstructorsUrl={"Images/Trainer2.jpg"} />
          </div>
          <div className='col-md-6'>
            <Instructors InstructorsName={"Lorem ipsum"} InstructorsDescription={"3"} InstructorsUrl={"Images/Trainer4.jpg"} />
          </div>
          <div className='col-md-6'>
            <Instructors InstructorsName={"Lorem ipsum"} InstructorsDescription={"3"} InstructorsUrl={"Images/Trainer5.jpg"} />
          </div>
          <div className='col-md-6'>
            <Instructors InstructorsName={"Lorem ipsum"} InstructorsDescription={"4"} InstructorsUrl={"Images/Trainer6.jpg"} />
          </div>
          <div className='col-md-6'>
            <Instructors InstructorsName={"Lorem ipsum"} InstructorsDescription={"5"} TrainerCardUrl={"Images/Trainer7.jpg"} />
          </div>
          <div className='col-md-6'>
            <Instructors InstructorsName={"Lorem ipsum"} InstructorsDescription={"6"} TrainerCardUrl={"Images/Trainer8.jpg"} />
          </div>
          <div className='col-md-6'>
            <Instructors InstructorsName={"Lorem ipsum"} InstructorsDescription={"7"} TrainerCardUrl={"Images/Trainer9.jpg"} />
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default InstructorsPage;