import React, { Component } from 'react';

import './style.scss';
import img from '../../images/logo.jpg';

const arr = [
  '醫院介紹',
  '醫療單位',
  '最新資訊',
  '醫療項目',
  '預約看診',
  '表格下載',
  '聯絡我們',
];

export default class FooterBlock extends Component {
  render() {
    return (
      <div className='FooterBlock'>
        <div className="container">
          <img src={img} alt=""/>
          <div>
            <div className="infoBar">
              {arr.map((item,index) => 
                <div
                  className='item'
                  key={index}>
                  {item}
                </div>
              )}
            </div>
            <div className='setEnd'>© 2020 國立陽明大學附設醫院. All Rights Reserved</div>
          </div>
        </div>
      </div>
    )
  }
}
