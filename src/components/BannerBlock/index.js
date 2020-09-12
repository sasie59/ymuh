import React, { Component } from 'react';
import Gird from './components/GridBlock';
import './style.scss';

export default class BannerBlock extends Component {
  render() {
    return (
      <div className='BannerBlock'>
        <div className='carousel'>
          
        </div>
        <div className='fourSquareGrid'>
          <Gird>掛號</Gird>
          <Gird style={{
            backgroundColor: '#ccc'
          }}>門診表</Gird>
          <Gird style={{
            backgroundColor: '#ccc'
          }}>找醫師</Gird>
          <Gird>聯絡</Gird>
        </div>
      </div>
    )
  }
}
