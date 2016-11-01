import React, { Component } from 'react';
import firebase from 'firebase';
import "./scss/reset.scss";
import "./scss/app.scss";


import AddItem from './add-item'
import SharedItem from './sharedItem'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render(){
    var renderItems = this.state.items;
    return (
      <div className='app'>
        <AddItem />

        <div className='sharedItems'>
          { Object.keys(renderItems).map((id)=> {
            return(
              <div key={ id } className="shared-item">
                <SharedItem
                  id = { id }
                  thisItem = { renderItems[id] }
                  name = { renderItems[id].name }
                  description = { renderItems[id].description }
                  postTime = { renderItems[id]['post-time'] }
                  endTime = { renderItems[id]['end-time'] }
                  postDate = { renderItems[id]['readable-post-date'] }
                  endDate = { renderItems[id]['readable-end-date'] }
                />
              </div>
            )
          })}
        </div>

      </div>
    )
  }

  componentWillMount() {
    this.firebaseRef = firebase.database().ref("shared-items");
    this.firebaseRef.on("child_added", (dataSnapshot) => {
      var renderItems = this.state.items;
      renderItems[dataSnapshot.key] = dataSnapshot.val();
      this.setState({
        items: renderItems
      });
    })
  }
}

export default App;
