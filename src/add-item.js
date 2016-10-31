import React, { Component } from 'react';
import firebase from 'firebase';

class AddItem extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      newItem: {
        'name': '',
        'description' : '',
        'post-time' : '',
        'end-time' : '',
        'readable-post-date' : '',
        'readable-end-date' : '',
        'booktime': [],
        'available-time' : 1,
      },
    }
    this.postItem = this.postItem.bind(this);
    this.updateField = this.updateField.bind(this);
    this.toggleAvailableTime = this.toggleAvailableTime.bind(this);
    this.updateTime = this.updateTime.bind(this);

  }

  postItem(e){
    e.preventDefault();
    this.firebaseRef = firebase.database().ref("shared-items");
    var newItem = this.state.newItem;

    var currentTime = new Date().getTime();
    var postYear = new Date(currentTime).getFullYear();
    var postMonth = new Date(currentTime).getMonth() + 1;
    var postDay = new Date(currentTime).getDate();
    var rentTime = parseInt(newItem['available-time']);
    var rentTimeBySeconds = rentTime*1000*60*60*24;
    var endTime = currentTime + rentTimeBySeconds;
    var endYear = new Date(endTime).getFullYear();
    var endMonth = new Date(endTime).getMonth() + 1;
    var endDay = new Date(endTime).getDate();

    newItem['post-time'] = currentTime;
    newItem['end-time'] = endTime;
    newItem['readable-post-date'] = `${postMonth} / ${postDay} / ${postYear}`;
    newItem['readable-end-date'] = `${endMonth} / ${endDay} / ${endYear}`;
    this.firebaseRef.push(newItem);
  }

  updateField(evt){
    var newItem = this.state.newItem;
    newItem[evt.target.name] = evt.target.value;
    this.setState({newItem: newItem});
  }

  toggleAvailableTime(evt){
    var newItem = this.state.newItem;
    newItem[evt.target.name] = !newItem[evt.target.name];
    this.setState({newItem: newItem});
  }

  updateTime(evt){
    var newItem = this.state.newItem;
    newItem[evt.target.name] = evt.target.value;
    console.log(newItem);
    this.setState({newItem: newItem});
  }

  render(){
    return (
      <div>
        <h1>Oh Share Economy</h1>
        <form className='new-item-form'>
          <label htmlFor='item-name'>Name</label>
          <input type='text' name='name' id='item-name' onChange = {this.updateField} />
          <label htmlFor='item-description'>Description</label>
          <input type='text' name='description' id='item-description' onChange = {this.updateField} />
          <fieldset>
            <p> Available Time: </p>
            <select name='available-time' id='available-time' onChange = {this.updateTime}>
              <option value="1">1 day</option>
              <option value="2">2 days</option>
              <option value="3">3 days</option>
              <option value="4">4 days</option>
              <option value="5">5 days</option>
              <option value="6">6 days</option>
            </select>

          </fieldset>
          {/*
          <select type='text' name='category' id='item-category' onChange = {this.updateField}>
            <option>Tools</option>
            <option>Flowers</option>
          </select>
          <label htmlFor='item-category'>Category</label>
          */}

          <button onClick = {this.postItem}>Post</button>
        </form>
      </div>
    )}
}

export default AddItem;
