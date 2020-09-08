import React, { Component } from 'react';
import img from '../HeaderBlock/logo.png';
import InfoBar from '../InfoBlock/InfoBar/index';
import './style.scss';

export default class FooterBlock extends Component {
  render() {
    return (
      <div className='FooterBlock'>
        <img src={img} alt=""/>
        <div className="infoBar">
          <InfoBar>醫院介紹</InfoBar>
          <InfoBar>醫療單位</InfoBar>
          <InfoBar>最新資訊</InfoBar>
          <InfoBar>醫療項目</InfoBar>
          <InfoBar>預約看診</InfoBar>
          <InfoBar>表格下載</InfoBar>
          <InfoBar>聯絡我們</InfoBar>
        </div>
      </div>
    )
  }
}
