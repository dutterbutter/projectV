import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="card-panel grey lighten-2 homepage__header">
        <div className="container headline">
          <h1 className="title-headline">VALIDATOR VAULT</h1>
          <span className="sub-tag">Your Trusted Canadian Validators <img className="responsive-img cdnlogo" src="/cdn.png" height="25" width="25"alt="canada"/></span>
        </div>
      </div>
    );
  }
}

export default Home;