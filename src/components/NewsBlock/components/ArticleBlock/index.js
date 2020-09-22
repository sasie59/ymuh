import React, { Component } from 'react';
import './style.scss';

export default class ArticleBlock extends Component {
  render() {
    return (
      <div className='ArticleBlock'>
        {this.props.textList.map((text,index) =>
          <div
            key={index}
            className='text'>
            {text}
          </div>
        )}
      </div>
    )
  }
}
