import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Question from './components/Question/Question';
import Questions from './components/Questions/Questions';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Questions}/>
        <Route exact path='/question/:questionId' component={Question}/>
      </div>
    );
  }
}

export default App;