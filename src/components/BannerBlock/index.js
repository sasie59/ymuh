import React, { Component } from 'react';
import Carousel from './components/Carousel';
import Gird from './components/GridBlock';
import DarkGrid from './components/DarkGridBlock';
import img1 from 'images/1.jpg';
import img2 from 'images/2.jpg';
import img3 from 'images/3.jpg';
import img4 from 'images/4.jpeg';
import img5 from 'images/5.jpeg';
import './style.scss';

export default class BannerBlock extends Component {
  render() {
    return (
      <div className='BannerBlock'>
        <div className='carousel'>
          <Carousel>
            <img src={img1} alt="1"/>
            <img src={img2} alt="2"/>
            <img src={img3} alt="3"/>
            <img src={img4} alt="4"/>
            <img src={img5} alt="5"/>
          </Carousel>
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
