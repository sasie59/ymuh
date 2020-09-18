import React, { Component } from 'react';
import img from '../../images/logo.jpg';
import './style.scss';

export default class HeaderBlock extends Component {
  render() {
    return (
      <div className='HeaderBlock'>
        <img className='logo' src={img} alt=""/>
        <div className='title'>
          國立陽明大學附設醫院
        </div>
        <div className="gap" />
        <div className='searchBar'>
          <input className='search' type="text"/>
          <div className='magnifier' />
        </div>
      </div>
    )
  }
}
