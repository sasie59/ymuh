import React, { Component } from "react";
import { connect } from 'react-redux';
import Article from './components/ArticleBlock';
import { changeArticle } from "actions";
import "./style.scss";

export class NewsBlock extends Component {
  
  render() {
    const textList = this.props.category[this.props.select];
    return (
      <div className="NewsBlock">
        <ul className="News">
          <li>首頁公告</li>
          <li>新聞發怖</li>
          <li>門診公告</li>
          <li>鄉親肯定</li>
          <li>員工服務</li>
          <li>防疫物資</li>
        </ul>
        <div className='article'>
          <Article textList={textList} /> 
        </div>
      </div>
    );
  }
}

const mapState2Props = (state) => {
  return state.newsList;
};

const mapDispatch2Props = (dispatch) => {
  return {
    change: () =>dispatch(changeArticle()),
  };
};

export default connect (mapState2Props, mapDispatch2Props)(NewsBlock);

