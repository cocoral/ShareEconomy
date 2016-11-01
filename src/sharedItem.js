import React, { Component } from 'react';
import firebase from 'firebase';


class SharedItem extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      originalItem: {
        'name': '',
        'description' : '',
        'post-time' : '',
        'end-time' : '',
        'readable-post-date' : '',
        'readable-end-date' : '',
        'booked-time': [],
        'available-time': [],
        'rent-time' : 1,
      },
      newItem: {
        'name': '',
        'description' : '',
        'post-time' : '',
        'end-time' : '',
        'readable-post-date' : '',
        'readable-end-date' : '',
        'booked-time': [],
        'available-time': [],
        'rent-time' : '',
      }
    }
    this.bookItem = this.bookItem.bind(this);
  }

  bookItem(e){
    e.preventDefault();

  }

  render(){
    return (
      {/*
      <div className="shared-item-content">
        <div className='name'>
          <h3>{ this.states.originalItem.name }</h3>
        </div>
        <div className='intro'>
          <p>{ this.states.originalItem.description }</p>
        </div>
        <div className='post-date'>
          <p>post on { this.states.originalItem['readable-post-date'] }</p>
        </div>
        <div className='available-date'>
          <p>available until { this.states.originalItem['readable-end-date'] }</p>
        </div>
        <button onClick = {this.bookItem}>Book It!</button>
      </div>
      */}
    )
  }

  componentWillMount() {
    // var postTime = this.props.postTime;
    // var endTime = this.props.endTime;
    var originalItem = this.props.thisItem;
    console.log(originalItem)
    this.setState({
      originalItem : originalItem
    })
  }
}

export default SharedItem;
