import React, { Component } from 'react';
import { connect } from  'react-redux';
import {
  realTimeInfo,
  REAL_TIME_INFO
} from '../../../../actions';
import './style.scss';
export class SubjectBlock extends Component {
  render() {
    const {
      list,
      index,
    } =this.props;
    return (
      <div className='SubjectBlock'>
        <div className='division'>{list[index].division}</div>
        <div className='name'>{list[index].name}</div>
        <div className='number'>{list[index].number}</div>
        <div className='text'>我也要掛</div>
      </div>
    )
  }
}

const mapState2props = (state) => {
  return {
    list: state.list,
    index: state.index,
  }
};

const mapDispatch2props = (dispatch) => {
  return {
    realTime : () => dispatch(realTimeInfo())
  };
};

export default connect(mapState2props, mapDispatch2props)(SubjectBlock)

