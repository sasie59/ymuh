import React, { Component } from 'react';
import Gird from './components/GridBlock';
import DarkGrid from './components/DarkGridBlock';

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
            <DarkGrid>門診表</DarkGrid>
          </div>
          <div className='grid'>
            <DarkGrid>找醫師</DarkGrid>
            <Gird>聯絡</Gird>
          </div>
        </div>
      </div>
    )
  }
}
