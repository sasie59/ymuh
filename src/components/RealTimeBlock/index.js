import React, { Component } from "react";
import { connect } from "react-redux";

import { changeDepartment } from "actions";

import Title from "./components/TitleBlock";
import Subject from "./components/SubjectBlock";

import "./style.scss";

export class RealTimeBlock extends Component {
  componentDidMount() {
    setInterval(this.props.change, 1500);
  }

  render() {
    return (
      <div className="RealTimeBlock">
        <div className="title">
          <div className='internalMed'>
            <Title>謢理指導</Title>
            <div className='space' />
            <Subject bigDartment={this.props.internalMedList} />
          </div>
          <div className='surgical'>
            <Title>衛教資訊</Title>
            <div className='space' />
            <Subject bigDartment={this.props.surgicalList} />
          </div>
          <div className='gynAndPediatrics'>
            <Title>高齡友善</Title>
            <div className='space' />
            <Subject bigDartment={this.props.gynAndPediatricsList} />
          </div>
          <div className='other'>
            <Title>失智照顧</Title>
            <div className='space' />
            <Subject bigDartment={this.props.otherList} />
          </div>
        </div>
      </div>
    );
  }
}

const mapState2props = (state) => {
  return state.fourList;
};

const mapDispatch2props = (dispatch) => {
  return {
    change: () => dispatch(changeDepartment()),
  };
};

export default connect(mapState2props, mapDispatch2props)(RealTimeBlock);
