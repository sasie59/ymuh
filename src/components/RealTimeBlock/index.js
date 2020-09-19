import React, { Component } from "react";
import Title from "./components/TitleBlock";
import Subject from "./components/SubjectBlock";

import "./style.scss";

export default class RealTimeBlock extends Component {
  render() {
    return (
      <div className="RealTimeBlock">
        <div className="title">
          <div
            style={{
              backgroundColor: "#D8EBCA",
              margin: "13px",
            }}
          >
            <Title>謢理指導</Title>
            <div style={{
              height: '10px',
              backgroundColor: '#fff'
            }} />
            <Subject />
          </div>
          <div
            style={{
              backgroundColor: "#CAEBDB",
              margin: "13px",
            }}
          >
            <Title>衛教資訊</Title>
          </div>
          <div
            style={{
              backgroundColor: "#CADBEB",
              margin: "13px",
            }}
          >
            <Title>高齡友善</Title>
          </div>
          <div
            style={{
              backgroundColor: "#D3CAEB",
              margin: "13px",
            }}
          >
            <Title>失智照顧</Title>
          </div>
        </div>
      </div>
    );
  }
}
