import React, { Component } from 'react';
import InfoBar from './InfoBar/index';
import './style.scss';

export default class InfoBlock extends Component {
  render() {
    return (
      <div className='InfoBlock'>
        <div className="infoBar">
          <InfoBar>醫院介紹</InfoBar>
          <InfoBar>醫療單位</InfoBar>
          <InfoBar>最新資訊</InfoBar>
          <InfoBar>醫療項目</InfoBar>
          <InfoBar>預約看診</InfoBar>
          <InfoBar>表格下載</InfoBar>
          <InfoBar>聯絡我們</InfoBar>
        </div>
        <div className="bus">
          <a href="">蘭陽院區發車 08:30</a><br/>
          <a href="">新民院區發車 08:45</a>
        </div>
      </div>
    )
  }
}
