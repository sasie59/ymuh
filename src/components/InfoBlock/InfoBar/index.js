import React from 'react';
import './style.scss';

export default function InfoBar(props) {
  return (
    <div className='box'>
      {props.children}
    </div>
  )
}
