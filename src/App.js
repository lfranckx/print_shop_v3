import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import ItemsContext from './Contexts/ItemsContext';

import Navbar from './Components/Navbar/Navbar';

class App extends Component {
  static contextType = ItemsContext;

  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
  }

  static getDerivedStateFromError(error) {
    return { error: true };
  }

  componentDidMount() {
    localStorage.clear();
  }

  render() {
    return (
      <>
        <Navbar />
      </>
    )
  }
}

export default App
