import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Questions from './components/Questions/Questions';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Questions/>
      </div>
    );
  }
}

export default App;