import React, { Component } from 'react'
import './style.scss';
import News from './News/index';

export default class NewsBlock extends Component {
  render() {
    return (
      <div className='NewsBlock'>
        <div className="News">
          <div className='firstColumn'>
          <News>首頁公告</News>
          </div>
          <News>新聞發怖</News>
          <News>門診公告</News>
          <News>鄉親肯定</News>
          <News>員工服務</News>
          <News>防疫物資</News>
        </div>
      </div>
    )
  }
}
