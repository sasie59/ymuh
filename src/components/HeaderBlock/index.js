import React, { Component } from 'react';
import img from './logo.png';
import magnifier from './magnifier.jpg';
import './style.scss';

export default class HeaderBlock extends Component {
  render() {
    return (
      <div className='HeaderBlock'>
        <img src={img} alt=""/>
        <div className='logo'>
          <h2>國立陽明大學附設醫院</h2>
        </div>
        <div className='searchBar'>
          <input className='search' type="text"/>
          <img src={magnifier} className='magnifier'/>
        </div>
      </div>
    )
  }
}
