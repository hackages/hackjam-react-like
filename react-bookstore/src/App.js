import React, {Component} from 'react';
import {Header} from './components/Header';
import {Main} from './components/Main';

class App extends Component {
  render() {
    return [<Header key={"header"}/>, <Main key={"main"}/>];
  }
}

export default App;
