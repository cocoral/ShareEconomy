import React, { Component } from 'react';



class SharedItem extends React.Component{

  bookItem(e){
    e.preventDefault();
    console.log('click')
  }
  render(){
    return (
      <div className="shared-item-content">
        <div className='name'>
          <h3>{ this.props.name }</h3>
        </div>
        <div className='intro'>
          <p>{ this.props.description }</p>
        </div>
        <div className='post-date'>
          <p>post on { this.props.postDate }</p>
        </div>
        <div className='available-date'>
          <p>available until { this.props.endDate }</p>
        </div>
        <button onClick = {this.bookItem}>Book It!</button>
      </div>
    )
  }
}

export default SharedItem;
