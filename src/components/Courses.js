import React from 'react';
import './Courses.css';
import CourseItem from './CourseItem';

function Courses() {
  return (
    <div className='courses'>
      <h1>COURSES</h1>
      <div className='courses__container'>
        <div className='courses__wrapper'>
          <ul className='courses__items'>
            < CourseItem
              src='images/fsd.jpg'
              text = 'CERTIFIED SPECIALIST IN FULL STACK DEVELOPMENT'
               path = '/services'
            />
            < CourseItem
              src='images/data_analyst.jpg'
              text = 'CERTIFIED SPECIALIST IN DATA SCIENCE & ANALYTICS'
              path='/services'
            />
             < CourseItem
             src = 'images/robotic.png'
             text = 'ROBOTIC PROCESS AUTOMATION'
             path = '/services' 
               />
               
          </ul>
          <ul className='courses__items'>
            < CourseItem
              src='images/cybersecurity.jpg'
              text = 'CERTIFIED CYBER SECURITY ANALYST'
              path='/services'
            />
            < CourseItem
              src='images/digital-marketing.jpg'
              text = 'DIGITAL MARKETING'
              path='/products'
            />
            < CourseItem
              src='images/img-8.jpg'
              text = 'CERTIFIED SPECIALIST IN SOFTWARE DEVELOPMENT'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Courses;
