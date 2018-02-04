import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home.js';
import About from './components/about/about.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
        </Switch>
      </div>
    );
  }
}

export default App;
