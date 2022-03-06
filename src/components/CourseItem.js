import React from 'react';
import { Link } from 'react-router-dom';

function CourseItem(props) {
  return (
    <>
      <li className='courses__item'>
        <Link className='courses__item__link' to={props.path}>
          <figure className='courses__item__pic-wrap' data-category={props.label}>
            <img
              className='courses__item__img'
              alt='imag'
              src={props.src}
            />
          </figure>
          <div className='courses__item__info'>
            <h5 className='courses__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CourseItem;
