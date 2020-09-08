import React from 'react';
import './style.scss';

export default function News(props) {
  return (
    <div className='box'>
      {props.children}
    </div>
  )
}
