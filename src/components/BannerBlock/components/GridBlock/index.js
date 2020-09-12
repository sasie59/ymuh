import React from 'react';
import './style.scss';
export default function GridBlock(props) {
  return (
    <div className='GridBlock'>
      {props.children}
    </div>
  )
}
