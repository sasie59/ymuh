import React, { Component } from 'react';
import './style.scss';

const lanyang = '08 : 30';
const xinmin = '08 : 45';

export default class InfoBlock extends Component {
  render() {
    return (
      <div className='InfoBlock'>
        <ul className="infoBar">
          <li className='box'>醫院介紹</li>
          <li className='box'>醫療單位</li>
          <li className='box'>最新資訊</li>
          <li className='box'>醫療項目</li>
          <li className='box'>預約看診</li>
          <li className='box'>表格下載</li>
          <li className='box'>聯絡我們</li>
        </ul>
        <div className="gap" />
        <div className="bus">
          <span>蘭陽院區發車</span>
          <span
            className='driveTime'
            style={{
              color: '#D2795D'
            }}>
            {xinmin}
          </span><br/>
          <span>新民院區發車</span>
          <span
            className='driveTime'
            style={{
              color: '#333'
            }}>
            {lanyang}
          </span>
        </div>
      </div>
    )
  }
}
