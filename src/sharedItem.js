import React, { Component } from 'react';
import firebase from 'firebase';


class SharedItem extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      newItem: {
        'id' : '',
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
    this.getAvailableDays = this.getAvailableDays.bind(this);
  }

  bookItem(e){
    e.preventDefault();
    console.log('click')
  }

  getAvailableDays(endTime){
    var currentTime = new Date().getTime();
    console.log(currentTime, endTime)
    var timeDifferenceInDays = (endTime - currentTime) / 1000 / 60 / 60 / 24;

    return Math.floor(timeDifferenceInDays)
  }

  render(){


    return (

      <div className="shared-item-content">
        <div className='shared-item-name'>
          <h3>{ this.props.thisItem.name }</h3>
        </div>
        <div className='shared-item-intro'>
          <p>{ this.props.thisItem.description }</p>
        </div>
        <div className='shared-item-post-date'>
          <p>post on { this.props.thisItem['readable-post-date'] }</p>
        </div>
        <div className='shared-item-available-date'>
          <p>available until { this.props.thisItem['readable-end-date'] }</p>
        </div>
        <div className = 'shared-item-calender'>
          {this.getAvailableDays(this.props.thisItem['end-time'])}

        </div>
        <button onClick = {this.bookItem}>Book It!</button>
      </div>

    )
  }

  componentWillMount() {
    // var postTime = this.props.postTime;
    // var endTime = this.props.endTime;
  }
}

export default SharedItem;
