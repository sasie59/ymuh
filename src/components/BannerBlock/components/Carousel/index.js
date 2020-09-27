import React, { Component } from 'react';
import './style.scss';
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: props.children
    }
  }

componentDidMount() {
  setInterval(() => {
    setTimeout(()=> {
      const { imgList } = this.state;
      this.setState({
        imgList: imgList.slice(1).concat(imgList[0]),
        isMoving: false
      });
    }, 1000);
    this.setState({
      isMoving: true
    })
  }, 3000)
}

  render() {
    const { imgList, isMoving } = this.state;
    return (
      <div className='box'>
      <div className='imgBox'>
        <div className={`img ${isMoving ? 'hide' : '' }`}>{imgList[0]}</div>
        <div className={`img ${isMoving ? 'show' : '' }`}>{imgList[1]}</div>
      </div>
      <div className='ballBox'>
        <div className='ball' />
        <div className='ball' />
        <div className='ball' />
        <div className='ball' />
        <div className='ball' />
        <div className='ball' />
        <div className='ball' />
      </div>
      </div>
    )
  }
}
