import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import AppRouter from './components/AppRouter/AppRouter'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <AppRouter/>
      </div>
    );
  }
}

export default App;