import React, { Component } from 'react';
import img from './logo.png';

export default class HeaderBlock extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={img} alt=""/>
          <h2>國立陽明大學附設醫院</h2>
        </div>
        <div>
          <input type="text"/>
        </div>
      </div>
    )
  }
}
