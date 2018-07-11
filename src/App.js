import React, { Component } from 'react';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Content from './component/Content';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "main-div">
      <Header />
      <Navbar />
      <Content /> 
      </div>
      
    );
  }
}

export default App;
