import React, { Component } from 'react';
import img from './logo.png';
import './style.scss';

export default class HeaderBlock extends Component {
  render() {
    return (
      <div className='HeaderBlock'>
        <div className='logo'>
          <img src={img} alt=""/>
          <h2>國立陽明大學附設醫院</h2>
        </div>
        <div className='searchBar'>
          <input type="text"/>
        </div>
      </div>
    )
  }
}
