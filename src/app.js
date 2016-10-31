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
    // console.log(renderItems)
    return (
      <div className='app'>
        <AddItem />


        <div className='sharedItems'>
          { Object.keys(renderItems).map((id)=> {
            return(
              <div key={ id } className="shared-item">
                <SharedItem
                  id = { id }
                  name = { renderItems[id].name }
                  description = { renderItems[id].description }
                  postDate = { renderItems[id]['readable-post-date'] }
                  endDate = { renderItems[id]['readable-end-date'] }
                />
              </div>
            //  <div key={ id } className="shared-item">
            //
            //   <div className='name'>
            //     <h3>{ renderItems[id].name }</h3>
            //   </div>
            //   <div className='intro'>
            //     <p>{ renderItems[id].description }</p>
            //   </div>
            //   <div className='post-date'>
            //     <p>post on { renderItems[id]['post-time'] }</p>
            //   </div>
            //   <div className='available-date'>
            //     <p>available until { renderItems[id]['readable-end-date'] }</p>
            //   </div>
            // </div>
            //
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
