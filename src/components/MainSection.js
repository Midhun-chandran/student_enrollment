import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
      <div className="main-titles">
<h1>ICT ACADEMY</h1>
      < p > Industry focused ICT skills development programmes
      for students </p>
      </div>
      
      <div className='main-btns'>
      
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick='/Courses'
        >
          Go through our courses >
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
