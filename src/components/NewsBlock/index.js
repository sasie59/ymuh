import React, { Component } from "react";
import { connect } from 'react-redux';
import Article from './components/ArticleBlock';
import { changeArticle } from "actions";
import "./style.scss";

export class NewsBlock extends Component {
  
  render() {
    console.warn(this.props.state);
    // 沒抓到state?
    return (
      <div className="NewsBlock">
        <ul className="News">
          <li className='li'>首頁公告</li>
          <li className='li'>新聞發怖</li>
          <li className='li'>門診公告</li>
          <li className='li'>鄉親肯定</li>
          <li className='li'>員工服務</li>
          <li className='li'>防疫物資</li>
        </ul>
        <div className='article'>
          <Article/> 
        </div>
      </div>
    );
  }
}

const mapState2Props = (state) => {
  return state;
};

const mapDispatch2Props = (dispatch) => {
  return {
    change: () =>dispatch(changeArticle()),
  };
};

export default connect (mapState2Props, mapDispatch2Props)(NewsBlock);

