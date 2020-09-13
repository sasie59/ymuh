import React from 'react';
import './style.scss'

export default function TitleBlock(props) {
  return (
    <div className='TitleBlock'>
      {props.children}
    </div>
  )
}
