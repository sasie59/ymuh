import React from 'react';
import './style.scss';

export default function News(props) {
  return (
    <div className='NewsArea'>
      {props.children}
    </div>
  )
}
