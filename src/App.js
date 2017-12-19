import React, { Component } from 'react';
import SideNav from './SideNav';
import Sentry from './Sentry';
import How from './How';
import Overview from './Overview';
import Dev from './Dev';
import Validator from './Validator';
import TopNav from './TopNav';
import Home from './Jumbo';
import {Helmet} from "react-helmet";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="row">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Validator Vault</title>
                <link rel="canonical" href="/nodes.jpg" />
      </Helmet>
      <TopNav />
      <Home />
        <div className="container">
          <SideNav />
          <Overview />
          <How />
          <Sentry />
          <Validator />
          <Dev />
        </div>
      </div>
    );
  }
}

export default App;
