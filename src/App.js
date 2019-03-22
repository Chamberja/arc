import React, { Component } from 'react';
import Header from './components/header/header'
import Menu from './components/menu/menu'
import Main from './components/main/main'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Menu />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;