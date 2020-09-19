import React, { Component } from 'react';
import './style.scss';
export default class SubjectBlock extends Component {
  render() {
    const {
      list,
      index,
    } = this.props.bigDartment;
    return (
      <div className='SubjectBlock' >
        <div className='division'>{list[index].division}</div>
        <div className='name'>{list[index].name}</div>
        <div className='number'>{list[index].number}</div>
        <div className='text'>我要掛號</div>
      </div>
    )
  }
}
