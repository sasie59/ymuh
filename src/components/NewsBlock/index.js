import React, { Component } from "react";
import { connect } from 'react-redux';
import Article from './components/ArticleBlock';
import { changeArticle } from "actions";
import "./style.scss";


export class NewsBlock extends Component {
  handleChangeSelect = (choice) => {
    this.props.change(choice)
  }
  
  render() {
    const textList = this.props.category[this.props.select];
    return (
      <div className="NewsBlock">
        <ul className={`News ${this.props.select}`}>
          <li onClick={this.handleChangeSelect.bind(this, 'home')}>首頁公告</li>
          <li onClick={this.handleChangeSelect.bind(this, 'news')}>新聞發怖</li>
          <li onClick={this.handleChangeSelect.bind(this, 'opd')}>門診公告</li>
          <li onClick={this.handleChangeSelect.bind(this, 'folks')}>鄉親肯定</li>
          <li onClick={this.handleChangeSelect.bind(this, 'employee')}>員工服務</li>
          <li onClick={this.handleChangeSelect.bind(this, 'supplies')}>防疫物資</li>
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
    change: (choice) => dispatch(changeArticle(choice)),
  };
};

export default connect (mapState2Props, mapDispatch2Props)(NewsBlock);

