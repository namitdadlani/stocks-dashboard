import React, { Component } from 'react';
import Home from './containers/Home'
import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          </Switch>
        </Router>        
      </div>
    );
  }
}

export default App;
