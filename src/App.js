import React, { Component } from 'react';
import logo from './logo.svg';
import Search from "./Components/Search.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
              <Search/>
      </div>
    );
  }
}

export default App;
