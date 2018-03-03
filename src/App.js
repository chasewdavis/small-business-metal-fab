import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home.js';
import Projects from './components/projects/projects.js';
import About from './components/about/about.js';
import Contact from './components/contact/contact.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    );
  }
}

export default App;
