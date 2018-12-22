import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Question from './components/Question/Question';
import Questions from './components/Questions/Questions';
import Callback from './components/Callback/Callback';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Questions}/>
        <Route exact path='/question/:questionId' component={Question}/>
        <Route exact path='/callback' component={Callback}/>
      </div>
    );
  }
}

export default App;