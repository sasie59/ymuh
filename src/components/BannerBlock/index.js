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
          <div className='grid'>
            <Gird>掛號</Gird>
            <span className='bottom'>
              <Gird>門診表</Gird>
            </span>
          </div>
          <div className='grid'>
            <span style={{
              backgroundColor: '#ccc'
            }}>
              <Gird>找醫師</Gird>
            </span>
            <Gird>聯絡</Gird>
          </div>
        </div>
      </div>
    )
  }
}
