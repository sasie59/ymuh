import React from 'react'
import './style.scss';
export default function DarkGridBlock(props) {
  return (
    <div className='DarkGridBlock'>
      {props.children}
    </div>
  )
}
